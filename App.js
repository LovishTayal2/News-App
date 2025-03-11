import { StyleSheet, Text, View } from 'react-native';
import { SplashScreen } from './screens/SplashScreen';
import { CategoryScreen } from './screens/CategoryScreen';

// npm install @react-navigation/stack
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
// npm install @react-navigation/native
import { NavigationContainer } from '@react-navigation/native';
// npm install @react-navigation/drawer
import {createDrawerNavigator} from '@react-navigation/drawer';

// npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context react-native-vector-icons
export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const MainStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='Home' component={DrawerNavigator} />

     </Stack.Navigator>
  )
  const DrawerNavigator = () => (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Sports" component={ CategoryScreen} initialParams={{ category:'sports'}}/>
      <Drawer.Screen name="Business" component={ CategoryScreen} initialParams={{ category:'business'}}/>
      <Drawer.Screen name="Technology" component={ CategoryScreen} initialParams={{ category:'technology'}}/>
      <Drawer.Screen name="Science" component={ CategoryScreen} initialParams={{ category:'science'}}/>
      <Drawer.Screen name="Health" component={ CategoryScreen} initialParams={{ category:'health'}}/>

    </Drawer.Navigator>

  )
  return (
    // <NavigationContainer style={styles.container}>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name='Splash' component={SplashScreen} />
    //     <Stack.Screen name='Home' component={HomeScreen} />

    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
