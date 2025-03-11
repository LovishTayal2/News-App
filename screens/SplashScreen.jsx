// npm install lottie-react-native
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { FlatListComponent, StyleSheet , View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home");
        },4000);
    },[]);
    return(
        <SafeAreaView styles={styles.container}>
            <LottieView
                source = {require('../assets/Animation - 1741690025175.json')}
                autoPlay
                loop
                style = {styles.splashCard}

            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashCard: {
    width :300,
    height:300,
    position: 'absolute'
  }
});