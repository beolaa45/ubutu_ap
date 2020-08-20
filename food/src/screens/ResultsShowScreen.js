import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native'

function ResultsShowScreen({navigation}) {
 const id =   navigation.getParam("id");
 console.log(id)
return (
   <View style={styles.container}>
       <Text>ResultsShowScreen</Text>
       <Image />
   </View>
  );
}

const styles = StyleSheet.create({
   container: {}
});
export default ResultsShowScreen;