import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native'

function ResultsDetail(props) {
 console.log(props)
return (
   <View style={styles.container}>
       <Text>Results Detail</Text>
   </View>
  );
}

const styles = StyleSheet.create({
   container: {}
});
export default ResultsDetail;