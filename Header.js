import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default Header=(props)=>
{
    const {Container}=styles;
    return(<View style={Container}>
        <Text>{props.headerText}</Text></View>);
}

const styles=StyleSheet.create({
    Container:
    {
  height:60,
  elevation:5,
  justifyContent:'center',
  alignItems:'center',
  borderWidth:0.5
    }
});