import React from 'react'
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage"
function AppFormField({name, width,...otherProps}) {
    const { setFieldTouched, handleChange, errors ,touched, values} = useFormikContext()
    return (
        <>
            <AppTextInput 
                        // autoCapitalize="none"
                        // autoCorrect={false}
                        // keyboardType="email-address"
                        // icon="lock-closed"
                        // placeholder="Password"
                        // textContentType="password"
                        // secureTextEntry={true}
                        onBlur={() => setFieldTouched(name)}
                        onChangeText={handleChange(name)}
                        width={width}
                        value={values[name]}
                        {...otherProps}

                    />
                      <ErrorMessage visible={touched[name]} error={errors[name]}/>
        </>
    )
}


export default AppFormField
