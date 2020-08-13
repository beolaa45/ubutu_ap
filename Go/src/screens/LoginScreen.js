import React, { useState }  from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Screen from "../component/Screen";
import AppTextInput from "../component/AppTextInput";
import AppButton from '../component/Button/AppButton';
import { block, Value } from 'react-native-reanimated';
import colors from '../config/colors';
import * as Yup from "yup";
import { Formik } from "formik"
import AppText from '../component/AppText';
import ErrorMessage from "../component/ErrorMessage";
import AppFormField from '../component/AppFormField';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
})

function LoginScreen() {
    const [email, setEmail] = useState();
  const [password, setPassword] = useState();
    return (
        <Screen style={styles.container}>
            <View style={styles.image}>
                <Image
                    style={styles.logo} 
                    source={require("../assets/logo-red.png")}/>
           </View>
           
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
            {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                <>
                     {/* <AppTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        icon="mail"
                        placeholder="Email"
                        onBlur={() => setFieldTouched("email")}
                        onChangeText={handleChange("email")}
                

                    />
   
                    <ErrorMessage visible={touched.email} error={errors.email}/> */}
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        icon="mail"
                        placeholder="Email"
                        name="email"
                       
                

                    />
                    <AppFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        icon="lock-closed"
                        placeholder="Password"
                        textContentType="password"
                        secureTextEntry={true}
                        name="password"

                    />
                     
                   
                    <AppButton title="Login" onPress={handleSubmit}/>
                </>
            )}
        </Formik>
       
        </Screen>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
       
        marginTop: 50,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center"
        
        
    },
    image: {
        alignItems: "center"
    },
    container: {
        padding: 10,
        width: "100%",
        flex: 1,
        backgroundColor: colors.white,
        textAlign: "center"
    
     
        

    }
})
export default LoginScreen
