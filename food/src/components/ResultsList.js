import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetail from './ResultsDetail';
import { withNavigation} from 'react-navigation'

function ResultsList({title, results, navigation, }) {
    console.log(results)
return (
   <View style={styles.container}>

    <Text style={styles.title}>{title}</Text>

    <FlatList 
        data={results}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
            return(
                <TouchableOpacity onPress={() => navigation.navigate("ResultsShow",
                {
                    id: item.id
                })} >
                    <ResultsDetail results={item} />
                </TouchableOpacity>
            )
        }}
    />
   </View>
  );
}

const styles = StyleSheet.create({
   container: {},
   title: {
       fontSize: 18,
       fontWeight: "bold"
   },
   image: {
       color: "red"
   }
});
export default withNavigation(ResultsList)  ;