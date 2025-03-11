import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, Text,View } from "react-native";
import { StyleSheet } from "react-native";
import { NewsCard } from "../components/NewsCard";
import  axios from "axios";
import { FlatList } from "react-native";


export const CategoryScreen = ({route}) => {

    const API_Key = "2d85247f69ec43659963533a5b3b6ed3";
    const COUNTRY = "US";
    const {category}=route.params;
    const [news,setNews] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetchNews();
    },[]);

    const fetchNews = async() => {
        const newsUrl = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${category}&apiKey=${API_Key}`;
       //  const newsUrl = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${category}&apiKey=${API_KEY}`;
        try {
            const res = await axios.get(newsUrl);
            setNews(res.data.articles);
            setLoading(false); 
        }
        catch(error)
        {
            console.error("News API failed to fetch news: ",error);
        }

        
    }

    return(
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>{`${category.toUpperCase()} NEWS`}</Text>
            {
                loading? (
                    <ActivityIndicator
                        size="large"
                        color="red"
                    />
                ) : (

                    <FlatList
                    data={news}
                    keyExtractor={(item,index)=> index.toString()}
                    renderItem={({item}) => <NewsCard news={item}/>}

                    />
                )
            }

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
    fontSize:26,
    textAlign:"center",
    fontWeight:"bold",
    marginTop:40,
    marginBottom:20,
    backgroundColor:"#eee",
    padding:20
  }
});