import React, { useState} from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import Screen from "../component/Screen"
import AppForm from "../component/Forms/AppForm";
import AppFormField from "../component/Forms/AppFormField";
import AppFormPicker from "../component/Forms/AppFormPicker";
import CategoryPickerItem from "../component/CategoryPickerItem"
import SubmitButton from "../component/Forms/SubmitButton";

import AppFormImagePicker from "../component/Forms/AppFormImagePicker";

import Geolocation from '@react-native-community/geolocation';
 
Geolocation.getCurrentPosition(info => console.log(info));
const categories = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
  ];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please seect at least one image.")
})
  
  function ListingEditScreen() {
  
      return (
          <Screen style={styles.container}>
              <AppForm
                initialValues={{
                  title: "",
                  price: "",
                  description: "",
                  category: null,
                  images: []
                }}

                 onSubmit={(values) => console.log(values)}
                 validationSchema={validationSchema}
              >
               <AppFormImagePicker 
                  name="images"
               />
                <AppFormField 
                  maxLength={255} 
                  name="title" 
                  placeholder="Title"
                  width="100%"
                  />
                <AppFormField
                  keyboardType="numeric"
                  maxLength={8}
                  name="price"
                  placeholder="Price"
                  width="100%"
                />
                <AppFormPicker 
                  items={categories}
                  placeholder="Category"
                  width="100%"
                  name="category"
                  numberOfColumns={1}
                  
                />
                <AppFormField
                  maxLength={255}
                  multiline={true}
                  name="description"
                  numberOfLines={3}
                  placeholder="Description"
                  width="100%"
                />
                <SubmitButton title="Post"/>
              </AppForm>

          </Screen>
      )
  }
  
  const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        flex: 1,
        
      
    }
  })
  export default ListingEditScreen
  