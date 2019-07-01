import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (CardSection = props => {
  const { containerStyle } = styles;
  return <View style={containerStyle}>{props.children}</View>;
});

const styles = StyleSheet.create({
  containerStyle: {
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
});
