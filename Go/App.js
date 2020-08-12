/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet,View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from "./src/screens/WelcomeScreen"
import ViewImageScreen from "./src/screens/ViewImageScreen"
import AppText from './src/component/AppText';
import AppButton from "./src/component/Button/AppButton";
import Card from "./src/component/Card";
import image from "./src/assets/jacket.jpg"
import ListingDetalisScreen from './src/screens/ListingDetalisScreen';
import MessageScreen from './src/screens/MessageScreen';
import Icons from "./src/component/Icon";
import ListItem from './src/component/ListItem';
import AccountScreen from "./src/screens/AccountScreen"
import ListingScreen from './src/screens/ListingScreen';



const App = () => {
  
  return(
   <View>
     <ListingScreen />
   </View>
  )
}

// const App = () => {
  
//   return(
//     <AppText st>I love React Native</AppText>
//   )
// }

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default App;
