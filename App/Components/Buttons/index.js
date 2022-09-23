import React, { Component } from 'react';
import { View, Image,Text, TouchableHighlight,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import { PropTypes } from 'prop-types'

import styles from './styles';

const imageWidth = Dimensions.get('window').width;


class RoundButtons extends Component{
   
   render(){

    const { text,
      onPress,
      btnfontSize,
      btntxtncolor,
      btnbackgroundColor,
      btnWidth,
      btnHight,
      btnborderColor,
      btnMarginLeft,btnMarginRight,
      btnpaddingTop,btnpaddingBottom,
      disabled } = this.props;
   
    const fontSize=btnfontSize || 14;
     const color=btntxtncolor || '#ffffff'
     const backgroundColor=btnbackgroundColor || '#000000'
     const width=btnWidth || imageWidth/1.02;
     const height=btnHight || 100;
     const marginLeft=btnMarginLeft || 5;
     const marginRight =btnMarginRight || 5;
     const borderColor=btnborderColor || '#ffffff'
     const paddingTop=btnpaddingTop || 16;
     const paddingBottom=btnpaddingBottom || 16;


       return(
         <View style={[{width,height},styles.btnwrapper]}>
         <TouchableOpacity style={[{backgroundColor,marginLeft,marginRight,borderColor},styles.wrapper]} onPress={onPress} disabled={disabled}>
             <Text style={[{fontSize,color,paddingTop,paddingBottom},styles.buttonText]}>{text}</Text>
          </TouchableOpacity>
         </View>
       
       ); 
   } 
 
}

RoundButtons.propTypes={
    text:PropTypes.string,
    onPress:PropTypes.func,
    btnfontSize:PropTypes.number,
    btntxtcolor:PropTypes.string,
    btnbackgroundColor:PropTypes.string,
    btnborderColor:PropTypes.string,
    btnHight:PropTypes.number,
    btnWidth:PropTypes.number,
    btnMarginLeft:PropTypes.number,
    btnMarginRight:PropTypes.number,
    btnpaddingTop:PropTypes.number,
    btnpaddingBottom:PropTypes.number,
    disabled:PropTypes.boolean,

   
}

export default RoundButtons;