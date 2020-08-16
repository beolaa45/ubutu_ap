
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import { View, StyleSheet } from 'react-native'
import colors from "./colors"
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
function ListItemDeleteAction(onPress) {
    return (
        [
            {
              text: 'Delete',
              underlayColor: 'rgba(0, 0, 0, 1, 1)',
              backgroundColor: "red",
              component: (
           
              <View style={styles.boxIcon}>
                <Icon size={20} color={colors.white} name="trash-outline"/>
              </View>
            
              ),
              onPress: onPress
              
            }
          ]
    )
}

const styles = StyleSheet.create({
    boxIcon: {
        
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          
    },
    
})
export default ListItemDeleteAction
