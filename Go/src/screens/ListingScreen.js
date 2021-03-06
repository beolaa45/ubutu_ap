import React from 'react'
import Screen from "../component/Screen";
import { View, FlatList, StyleSheet } from 'react-native';
import Card from "../component/Card"

import colors from '../config/colors';
const listings = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 1000,
        image: require("../assets/couch.jpg")
    }
]
function ListingScreen() {
    return (
       <Screen style={styles.screen}>
           <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => (
                    <Card
                    title={item.title} 
                    subTitle={"$" + item.price}
                    image={item.image}
                    />
                )
                    
                }
            />
       </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
        width: "100%",
        
        flex: 1
        
    }
})
export default ListingScreen
