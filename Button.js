import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";


export default (Button = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}
    onPress={onPress}
    >
      <Text style={styles.textStyle}>Click me</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize:16,
    fontWeight:'bold',
    paddingTop:10,
    paddingBottom:10

  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    borderRadius: 5,

    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
});
