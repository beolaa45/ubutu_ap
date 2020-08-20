import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text} from 'react-native'
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import ResultsList from '../components/ResultsList';


function SearchScreen(props) {
   const [term, setTerm] = useState('');
   const [results, setResults] = useState([]);
   
   const searchApi = async (searchTerm) => {
       console.log("search")
       try {
          const response = await yelp.get("search", {
             params: {
                limit: 50,
                searchTerm,
                location: "san jose"
             }
          });
      
          setResults(response.data.businesses)
       } catch (error) {
          setErrorMessage("error")
       }
      
    }



   useEffect(() => {
         searchApi("Cake")
   },[])
return (
   <View style={styles.container}>
      <SearchBar 
         term={term} 
         onTermChange={setTerm} 
         onTermSubmit={searchApi}
      
         />
        <ResultsList results={[{id: 1, image: 0},
                              {id: 2, image: 5}]} 
                     title="Max"
                   
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