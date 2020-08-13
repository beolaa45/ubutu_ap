import React from 'react';
import  Ionicons  from "react-native-vector-icons/Ionicons"
import { View, StyleSheet, Platform, TextInput } from 'react-native';

import colors from '../config/colors';

function AppTextInput({ icon, ...otherProps}) {
    return (
       <View style={styles.container}>
           {icon && <Ionicons name={icon} size={20} style={styles.icon}/>}
           <TextInput style={styles.textInput} {...otherProps}/>
       </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        flexDirection: "row",
        padding: 10,
        marginVertical: 10,
        alignItems: "center"
    },
    textInput: {
        fontSize: 18,
        color: colors.dark,
        width: "100%",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },
    icon: {
        marginRight: 10,
        color: colors.medium
    }
})
export default AppTextInput
