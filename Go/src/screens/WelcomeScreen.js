import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native"
import AppButton from '../component/Button/AppButton'
function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={2}
            style={styles.background}
            source={require("../assets/background.jpg")}>
                <View style={styles.logoContainer}>
                    
                    <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
                    <Text style={styles.tagline}>Sell What You Don't Need</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <AppButton title="Login" onPress={() => console.log()}/>
                    <AppButton title="Resign" color="secondary" onPress={() => console.log()}/>
                </View>
               
        </ImageBackground>
     
    )

    }

    const styles = StyleSheet.create({
        background: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center"
        },
        loginButton: {
            width: "100%",
            height: 70,
            backgroundColor: "#fc5c65",
        },
        registerButton: {
            width: "100%",
            height: 70,
            backgroundColor: "#4ecdc4",
        },
        logo: {
            width: 100,
            height: 100,
           
        },
        logoContainer: {
            position: "absolute",
            top: 70,
            alignItems: "center"
        },
        buttonContainer: {
            padding: 20,
            width: "100%"
        },
        tagline: {
            fontSize: 25,
            fontWeight: "700",
            paddingVertical: 20
        }
    })
export default WelcomeScreen
