import React from 'react'
import AppTextInput from "../component/AppTextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "../component/ErrorMessage"
function AppFormField({name, ...otherProps}) {
    const { setFieldTouched, handleChange, errors ,touched} = useFormikContext()
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
                        {...otherProps}

                    />
                      <ErrorMessage visible={touched[name]} error={errors[name]}/>
        </>
    )
}

export default AppFormField
