import React from "react";

import { StyleSheet, ScrollView } from "react-native";
import colors from "../config/colors";


function Screen({ children, style }) {
  return (
    <ScrollView style={[styles.screen, style]}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    
    
    
  },
});

export default Screen;
