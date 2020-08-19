import React from 'react';
import { View, StyleSheet, Text, TextInput} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
function SearchBar({term, onTermChange, onTermSubmit}) {
return (
   <View style={styles.background}>
       <Ionicons 
       name="search" 
       size={30}
       style={
           {
            marginHorizontal: 10
           }
       }
       />
      
       <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
            onChangeText={onTermChange}
            style={styles.inputStyle}
            placeholder="Search"

            
            onEndEditing={onTermSubmit}
       />
   </View>
  );
}

const styles = StyleSheet.create({
   background: {
       marginTop: 10,
       backgroundColor: "#F0EEEE",
       height: 50,
       borderRadius: 5,
       marginHorizontal: 15,
       flexDirection: "row",
       alignItems: "center",
       borderWidth: 1,
   },
   inputStyle: {
       borderColor: "black",
    
       flex: 1,
       fontSize: 18,
       
       
   }
});
export default SearchBar;