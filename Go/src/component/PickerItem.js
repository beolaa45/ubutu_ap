import React from 'react'
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from './AppText';
import Icon from "./Icon"
import Ionicons from "react-native-vector-icons/Ionicons"
function PickerItem({label,item, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
})
export default PickerItem
