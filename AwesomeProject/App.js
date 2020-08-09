/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TextInput, Button
} from 'react-native';


 import { createStackNavigator } from "@react-navigation/stack";
 import { NavigationContainer, useNavigation} from "@react-navigation/native";
 import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
  import Icon from "react-native-vector-icons/Ionicons"

 ///BUTTON NAVIGATION WITHOUT NavigationContainer
const Link = () => {
 const navigation =  useNavigation();

  return( <Button 
    title="Click"
    onPress={() => navigation.navigate("TweetsDetails",{ user: 'Dan Abramov' })}
  />)
 
}

 /// NAVIGATION ADD NavigationContainer
const Tweets = ({navigation}) => (
  <View>
    <Text>Tweets</Text>
    <Button 
      title="View Tweet"
      onPress={() => navigation.navigate("TweetsDetails", { user: 'Dan Abramov' })}
      
      />
    <Link />
      
  </View>
);

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
    <Tab.Screen name="Feed" component={Tweets}
      options={{
        tabBarIcon: () => (
          <Icon name="home-outline" size={30}/>
        )
      }}
    />
    <Tab.Screen name="Account" component={Account}/>
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
