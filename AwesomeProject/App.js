/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TextInput, Button, Image
} from 'react-native';


 import { createStackNavigator } from "@react-navigation/stack";
 import { NavigationContainer, useNavigation} from "@react-navigation/native";
 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
  import Icon from "react-native-vector-icons/Ionicons";
  import ImagePicker from 'react-native-image-crop-picker';



  //PICK
  

 

 ///BUTTON NAVIGATION WITHOUT NavigationContainer
const Link = (props) => {
 const navigation =  useNavigation();

 function pickImage(){
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log(image);
    props.path(image)

  });
}

  return( <Button 
    title="Click"
    onPress={() => pickImage()}
  />)
 
};



 /// NAVIGATION ADD NavigationContainer
const Tweets = ({navigation}) => {
      const [path, setpath] = useState("")
      const pathHanler = (image) => {
      console.log(image);
      setpath(image.path)
      }

      console.log(path);
  return(

    <View>
      <Text>Tweets</Text>
      <Button 
        title="View Tweet"
        onPress={() => navigation.navigate("TweetsDetails", { user: 'Dan Abramov' })}
        
        />
      <Link path={pathHanler}/>
      <Image source={{uri: path}} style={{width: 200, height: 200}}/>
        
    </View>
  )
};

const TweetsDetails = ({route}) => {
  
  console.log(route)
  return(
    <View>
    <Text>TweetsDetails {route.params.user}</Text>
  </View>
  )
  
}

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator 
    screenOptions={{
      headerStyle: { backgroundColor: "white"},
      headerTintColor: "red"
      
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato"},
        headerTintColor: "white"
        
      }}
    />
    <Stack.Screen name="TweetsDetails" component={TweetsDetails}
      options={( {route} ) => ({ 
        title: route.params.user,
        headerStyle: { backgroundColor: "tomato"},
        headerTintColor: "white"
      
    })}
    />
  </Stack.Navigator>
);

const Account = () => <View><Text>Account</Text></View>
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black"
    }}
  >
    <Tab.Screen name="Feed" component={StackNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <Icon name="home-outline" size={size} color={color}/>
        )
      }}
    />
    <Tab.Screen name="Account" component={Account}
     options={{
      tabBarIcon: ({color, size}) => (
        <Icon name="home-outline" size={size} color={color}/>
      )
    }}
    />
  </Tab.Navigator>
)
const App = () => {

  return(
    // <View>
    //   <Text>123</Text>
    // </View>
    <NavigationContainer>
     
      <TabNavigator />
    </NavigationContainer>
  )
}




export default App;
