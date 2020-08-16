import React from 'react';
import { View, StyleSheet, } from 'react-native'
import colors from '../config/colors';
import Ionicons from "react-native-vector-icons/Ionicons"

function ImageInput({imageUri}) {
return (
   <View style={styles.container}>
       {!imageUri && <Ionicons name="camera" color={colors.medium} />}
   </View>
  );
}

const styles = StyleSheet.create({
   container: {
       alignItems: "center",
       backgroundColor: colors.light,
       borderRadius: 15,
       height: 100,
       justifyContent: "center",
       width: 100
   }
});
export default ImageInput;
