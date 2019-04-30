//import libraries for making component
import React from 'react';
import {Text} from 'react-native';


//make a component
const Header =()=>{
    const { textStyle } = styles;
    return <Text style={textStyle}>Albums</Text> 
};

const styles ={
   textStyle : {
    fontSize :200
   }
};

//make a component available to other part of the app
export default Header;