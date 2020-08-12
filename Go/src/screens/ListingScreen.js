import React from 'react'
import Screen from "../component/Screen";
import { View, FlatList } from 'react-native';
import Card from "../component/Card"
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
       <Screen>
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

export default ListingScreen
