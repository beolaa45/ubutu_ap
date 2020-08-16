import React from 'react';
import { View, StyleSheet, } from 'react-native'
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from "formik"
function AppFormImagePicker({name}) {
    const { errors, setFieldValue, touched, values, setFieldTouched} = useFormikContext();
    const handleAdd = uri => {
        setFieldValue(name, [...values[name], uri])
    };
    const handleRemove = uri => {
        setFieldValue(name, values[name].filter(path => path !== uri))
    }
return (
   <>
    <ImageInputList 
        imageUris={values[name]}
        onAddItem={handleAdd}
        onRemove={handleRemove}
        onBlur={() => setFieldTouched(name)}
        />
    <ErrorMessage error={errors[name]} visible={touched[name]}/>
   </>
  );
}

const styles = StyleSheet.create({
   container: {}
});
export default AppFormImagePicker;