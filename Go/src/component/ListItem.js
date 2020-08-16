import React from 'react'
import {  View, StyleSheet, Image } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors';
import Swipeout from 'react-native-swipeout';
import Ionicons from "react-native-vector-icons/Ionicons"
function ListItem({ title, subTitle, image, IconComponent,rightActions}) {
    return (
        <Swipeout autoClose={true} right={rightActions}>
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image}/>}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                {subTitle && <AppText  numberOfLines={1} style={styles.subTitle}>{subTitle}</AppText>}
            </View>
            <Ionicons style={styles.icon} color={colors.medium} name="chevron-forward" size={30} />
        </View>
        </Swipeout>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
        alignItems: "center"
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
        flex: 1,
       
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        
    },
    title: {
        fontWeight: "700",

    },
    subTitle: {
        fontSize: 20,
        color: colors.medium
    },
    icon: {
        
    }
})
export default ListItem
