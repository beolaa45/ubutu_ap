import React from 'react'
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker"
import ErrorMessage from './ErrorMessage';
function AppFormPicker({ width,name, placeholder, items, PickerItemComponent, numberOfColumns}) {
    const { errors, setFieldValue, touched, values, setFieldTouched} = useFormikContext()
    return (
        <>
            <AppPicker 
                   items={items}
                   numberOfColumns={numberOfColumns}
                   onSelectItem={(item) => setFieldValue(name, item)}
                   PickerItemComponent={PickerItemComponent}
                   placeholder={placeholder}
                   selectedItem={values[name]}
                   width={width}
                   onBlur={() => setFieldTouched(name)}
               
               />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

export default AppFormPicker
