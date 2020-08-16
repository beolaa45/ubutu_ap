import React from 'react'
import { StyleSheet, Text} from 'react-native';
import styles from "./styles"

function AppText({children, style, ...ortherProps}) {
    return (
    <Text style={[styles.text, style]} {...ortherProps}>{children}</Text>
    )
}



export default AppText
