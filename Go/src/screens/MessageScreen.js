import React from 'react'
import { FlatList, View } from 'react-native';
import ListItem from '../component/ListItem';
import { SafeAreaView } from 'react-native-safe-area-context';

const messages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg")
    }
]

function MessageScreen() {
    return (
        <SafeAreaView>
       <FlatList 
            data={messages}
            keyExtractor={messages => messages.id.toString()}
            renderItem={({item}) => 
            <ListItem  
                title={item.title}
                subTitle={item.description}
                image={item.image}
                
            />}
            ItemSeparatorComponent={ () => 
                <View style={{width: "100%", height: 44, backgroundColor: "#000"}}/>
            }
       />
       </SafeAreaView>
    )
}

export default MessageScreen
