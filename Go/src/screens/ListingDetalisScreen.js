import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AppText from '../component/AppText'
import colors from '../config/colors'
import ListItem from "../component/ListItem"
function ListingDetalisScreen() {
    return (
       <View>
           <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.detalisContainer}>
            <AppText style={styles.title}>Red jacket for sale</AppText>
           <AppText style={styles.price}>$100</AppText>
            </View>
            <View style={styles.userContainer}>
                <ListItem image={require("../assets/mosh.jpg")}
                title="Mosh Hamedani"
                subTitle="5 Listings"   
            />
            </View>
          
       </View>
    )
}

const styles = StyleSheet.create({
    detalisContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 300,
       
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10

    },
    userContainer: {
        marginVertical: 15
    }
})
export default ListingDetalisScreen
