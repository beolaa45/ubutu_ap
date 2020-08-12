import React, { useState} from 'react'
import { FlatList, View, SafeAreaView } from 'react-native';
import ListItem from '../component/ListItem';


import ListItemDeleteAction from "../config/ListItemDeleteAction" 
import colors from '../config/colors';
const initMessages = [
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
];


function MessageScreen() {
    const [messages, setMessages] = useState(initMessages);
    const [ refreshing, setRefreshing] = useState(false)

    
    const handleDelete = message => {
        //delete the message from messages
            console.log(message);
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages)
    }
   
    return (
      
       <FlatList 
            data={messages}
            keyExtractor={messages => messages.id.toString()}
            renderItem={({item}) => 
        
            <ListItem  
                title={item.title}
                subTitle={item.description}
                image={item.image}
                rightActions={ListItemDeleteAction(()=> handleDelete(item))}
            />
          
            }
            ItemSeparatorComponent={ () => 
                <View style={{width: "100%", height: 10, backgroundColor: colors.white}}/>
            }
            refreshing={refreshing}
            onRefresh={()=> {
                setMessages([
                    {
                        id: 2,
                        title: "T2",
                        description: "D2",
                        image: require("../assets/mosh.jpg")
                    }
                ])
            }}
       />
      
       
    )
}

export default MessageScreen
