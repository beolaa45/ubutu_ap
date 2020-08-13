/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet,View, TextInput, Text, Switch} from 'react-native';

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
import Screen from "./src/component/Screen"
import AppTextInput from './src/component/AppTextInput';
import {Picker} from '@react-native-community/picker';
import AppPicker from "./src/component/AppPicker"
import LoginScreen from './src/screens/LoginScreen';
 
const categories  = [
  { label: "Furniture", value: 1},
  { label: "Clothing", value: 2},
  { label: "Cameras", value: 3},

]

const App = () => {
  
  
  return(
   <View style={{
     width: "100%",
     flex: 1,
     backgroundColor: "white",
     alignItems:"center"
     
   }}>
    <LoginScreen />
    
   </View>
  )
}

// const App = () => {
  
//   return(
//     <AppText st>I love React Native</AppText>
//   )
// }

const styles = StyleSheet.create({
  
})

export default App;
