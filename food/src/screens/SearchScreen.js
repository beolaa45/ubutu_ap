import React, {useState} from 'react';
import { View, StyleSheet, Text} from 'react-native'
import SearchBar from '../components/SearchBar';

function SearchScreen(props) {
   const [term, setTerm] = useState('');
   const [results, setResults] = useState([])
   console.log(term)
return (
   <View style={styles.container}>
      <SearchBar 
         term={term} 
         onTermChange={newTerm => setTerm(newTerm)} 
         onTermSubmit={() => console.log("term was submitted")}
         
         />
       <Text>We have {results.length}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: "white",
      flex: 1
   }
});
export default SearchScreen;