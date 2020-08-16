import React from 'react'
import AppButton from '../Button/AppButton'
import { useFormikContext } from "formik"
function SubmitButton({title, color}) {
    const { handleSubmit } = useFormikContext()
    return (
        <AppButton title={title} color={color} onPress={handleSubmit}/>
    )
}

export default SubmitButton
