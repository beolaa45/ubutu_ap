import React from 'react'
import { View } from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function Icon({name, size = 40, backgroundColor = "#000", iconColor = "#fff"}) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: backgroundColor,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <MaterialIcons name={name} color={iconColor} size={size /2}/>
        </View>
    )
}

export default Icon
