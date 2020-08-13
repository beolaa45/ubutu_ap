import React from "react";

import { StyleSheet, ScrollView, View } from "react-native";
import colors from "../config/colors";


function Screen({ children, style }) {
  return (
    <View style={[styles.screen, style]}>
      <View>
      {children}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    
    
    
  }
});

export default Screen;
