import React from 'react'
import {  View, StyleSheet, Image } from 'react-native'
import AppText from './AppText'
import colors from '../config/colors';
import Swipeout from 'react-native-swipeout';

function ListItem({ title, subTitle, image, IconComponent,rightActions}) {
    return (
        <Swipeout autoClose={true} right={rightActions}>
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image}/>}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
        </View>
        </Swipeout>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center"
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
    }
})
export default ListItem
