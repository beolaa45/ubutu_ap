import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowDetails from "./src/screens/ResultsShowScreen"
const navigator = createStackNavigator({
      Search: SearchScreen,
      ResultsShow: ResultsShowDetails 
},
  {
    initialRouteKey: "Search",
    defaultNavigationOptions: {
      title: "BusinessSearch"
    }
  }
)

export default createAppContainer(navigator)
// function App() {
// return (
//    <View style={styles.container}>
//      <Text>123</Text>
//    </View>
//   );
// }

// const styles = StyleSheet.create({
//    container: {}
// });
// export default App;