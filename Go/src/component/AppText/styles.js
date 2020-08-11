import { StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    text: {
        
        color: colors.black,
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir"
            },
            android: {
                fontSize: 20,
                fontFamily: "Roboto"
            }
        })
    }
})

export default styles;