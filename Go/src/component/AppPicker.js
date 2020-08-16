import React, { useState} from 'react';
import  Ionicons  from "react-native-vector-icons/Ionicons"
import { View, StyleSheet, Platform, Modal,Text, TouchableWithoutFeedback, Button, FlatList } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';
import PickerItem from './PickerItem';




function AppTextInput({ 
    icon, 
    placeholder, 
    items, 
    selectedItem, 
    onSelectItem,
    numberOfColumns = 1,
    width = "100%",
    onBlur,
    PickerItemComponent = PickerItem,
}) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
        <TouchableWithoutFeedback onPress={() => {console.log("tapp"); onBlur();setModalVisible(true)}}>
       <View style={[styles.container, {width}]}>
           {icon && <Ionicons 
                        name={icon} 
                        size={20} 
                        style={styles.icon}/>}
           <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
           <Ionicons 
                name="chevron-down-sharp" 
                size={20}
                color={colors.medium}/>
       </View>
       </TouchableWithoutFeedback>
       <Modal visible={modalVisible} animationType="sile">
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <FlatList
                data={items}
                keyExtractor={item => item.value.toString()}
                numColumns={numberOfColumns}
                renderItem={({item}) => 
                    <PickerItemComponent 
                        item={item} 
                        onPress={() => {
                            onSelectItem(item);
                            setModalVisible(false)
                        
                        }}/>}
                />
       </Modal>
       </>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    textInput: {
        fontSize: 18,
        color: colors.dark,
        width: "100%",
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    },
    icon: {
        marginRight: 10,
        color: colors.medium
    },
    text: {
        flex: 1
    }
})
export default AppTextInput
