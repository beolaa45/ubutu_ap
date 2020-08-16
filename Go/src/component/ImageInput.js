import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert} from 'react-native'
import colors from '../config/colors';
import Ionicons from "react-native-vector-icons/Ionicons"
import ImagePicker from 'react-native-image-crop-picker';

function ImageInput({imageUri, onChangeImage, onBlur}) {

    const selectImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            onChangeImage(image.path)
          })
          .catch(err => console.log(err));
    }
    const handlePess = () => {
        if(!imageUri) selectImage();
        else {
            Alert.alert("Delete", "Are you sure you want delete image?",
            [
                {
                    text: "Cancel",
                },
                {
                    text: "Ok", 
                    onPress: () => onChangeImage()
                }
            ]
            )
        }
    }

return (
    <TouchableWithoutFeedback onBlur={() => console.log("tapp")} onPress={handlePess}>
   <View style={styles.container}>
       {!imageUri && <Ionicons name="camera" size={40} color={colors.medium} />}
       {imageUri && <Image source={{ uri: imageUri}} style={styles.image}/>}
   </View>
   </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
   container: {
       alignItems: "center",
       backgroundColor: colors.light,
       borderRadius: 15,
       height: 100,
       justifyContent: "center",
       width: 100,
       overflow: "hidden",
       marginBottom: 10,
       marginRight: 10
   },
   image: {
    width: '100%',
    height: "100%"
   }
});
export default ImageInput;
