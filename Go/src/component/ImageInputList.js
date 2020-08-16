import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'
import ImageInput from './ImageInput';
import {  } from 'react-native-gesture-handler';

function ImageInputList({imageUris = [], onRemove, onAddItem, onBlur}) {
    const scrollView = useRef();

return (
    <View>
    <ScrollView onContentSizeChange={() => scrollView.current.scrollToEnd()} ref={scrollView} horizontal>
   <View style={styles.container}>
       {imageUris.map(uri => (
           <ImageInput 
            imageUri={uri}
            key={uri}
            onChangeImage={() => onRemove(uri)}
            onBlur={onBlur}
           />
       ))}
       <ImageInput 
        onChangeImage={uri => onAddItem(uri)}
       />
   </View>
   </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flexDirection: "row",

   
   }
});
export default ImageInputList;