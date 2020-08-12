import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ListItem from '../component/ListItem';
import Screen from "../component/Screen";
import colors from '../config/colors';
import Icon from "../component/Icon"
import ItemSeparatorComponent from '../component/ItemSeparatorComponent';
const menuItem = [
    {
        title: "My Listings",
        icon: {
            name: "menu",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]
function AccountScreen() {
    return (
        <Screen>
            <View style={styles.container}>
                <ListItem 
                    title="Mosh Hamedani" 
                    subTitle="mosh@gmail.com" 
                    image={require("../assets/mosh.jpg")}/>
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItem}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({item}) => 
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                    
                                />
                            }
                        />}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                />
            </View>
            <View style={styles.container}>
                <ListItem 
                    title="Log Out"
                    backgroundColor="#ffe66d"
                    IconComponent={
                        <Icon 
                            name="help_outline"
                            backgroundColor={colors.yellow}
                    />}
                />
            </View>
        </Screen>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20,

    }
})
export default AccountScreen
