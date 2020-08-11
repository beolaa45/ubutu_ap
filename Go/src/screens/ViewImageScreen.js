import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import colors from "../config/colors";
import Icon from "react-native-vector-icons/Ionicons";
function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <Icon name="close-sharp" color={colors.white} size={30}/>
            </View>
            <View style={styles.deleteIcon}>
                <Icon name="trash-sharp" color={colors.white} size={30}/>
            </View>
            <Image 
                resizeMode="contain"
                style={styles.image} 
                source={require("../assets/chair.jpg")}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%"
    },
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
       
       
        position: "absolute",
        top: 20,
        left: 30
    },
    deleteIcon: {

        position: "absolute",
        top: 20,
        right: 30
    }
})
export default ViewImageScreen
