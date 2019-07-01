import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import console = require("console");

export default (AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image,image} = album;
  const { container, textContainer, thumbnail_style ,headerText,imageStyle} = styles;
  return (
    <Card>
      <CardSection style={container}>
        <View>
          <Image style={thumbnail_style} source={{ uri: thumbnail_image }} />
        </View>
        <View style={textContainer}>
          <Text style={headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
          <Image 
          style={imageStyle}
          source={{uri:image}}
          />
      </CardSection>

      <CardSection>
          <Button onPress={()=>console.log(title)} />
      </CardSection>
    </Card>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  textContainer: {
    paddingLeft: 5,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  thumbnail_style: {
    height: 50,
    width: 50
  },
  headerText:
  {
      fontSize:18,
      fontWeight:'bold'
  },
  imageStyle:{
      flex:1,
      height:300,
      width:null
  }
});
