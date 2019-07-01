import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default (Card = props => {
  const { containerStyle } = styles;
  return <View style={containerStyle}>{props.children}</View>;
});

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    elevation: 4,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15,
    padding: 5
  }
});
