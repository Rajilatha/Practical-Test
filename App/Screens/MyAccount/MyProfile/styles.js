
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions,Platform} from 'react-native';
const imageWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: imageWidth / 380});
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default EStyleSheet.create({

iteminterest:{
    height:wp('30%'),
    width: wp('45%'),
    borderRadius: 5,
 
   
},
iteminterest1:{
    flex:1,
    paddingLeft:wp('3%'),
    paddingRight:wp('5%'),

    
},

txtstyle:{
    

    // fontSize:wp('4%'),
    // marginVertical:'3%',
    // justifyContent:'center',
    // backgroundColor:'#ffffff',
    // borderRadius:5,
    // borderWidth:1,
    // borderColor:'#777777',
    // paddingLeft:10

    fontSize:wp('4%'), padding:15,
                        backgroundColor:'#fff',
                        shadowColor: "#000000",
                        overflow: 'hidden',
                        borderRadius:2,
                        borderWidth:0.2,
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                          height: 1,
                          width: 1
                        }
  },
 focusedTextInput:{
  
//   fontSize:wp('4%'),
//   marginVertical:'3%',
//   justifyContent:'center',
//   backgroundColor:'#ffffff',
//   borderRadius:5,
//   borderWidth:1,
//   borderColor:'#20366B',
//   paddingLeft:10,

  fontSize:wp('4%'), padding:15,
                        backgroundColor:'#fff',
                        shadowColor: "#20366B",
                        overflow: 'hidden',
                        borderRadius:2,
                        borderWidth:0.2,
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                          height: 1,
                          width: 1
                        }
 },

 txtstyleIos:{
    
    // height:wp('10%'),
    // fontSize:wp('4%'),
    // marginVertical:'3%',
    // justifyContent:'center',
    // backgroundColor:'#ffffff',
    // borderRadius:5,
    // borderWidth:1,
    // borderColor:'#777777',
    // paddingLeft:10

    fontSize:wp('4%'), padding:15,
                        backgroundColor:'#fff',
                        shadowColor: "#000000",
                        overflow: 'hidden',
                        borderRadius:2,
                        borderWidth:0.2,
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                          height: 1,
                          width: 1
                        }
  },
 focusedTextInputIos:{
//      height:wp('10%'),
//   fontSize:wp('4%'),
//   marginVertical:'3%',
//   justifyContent:'center',
//   backgroundColor:'#ffffff',
//   borderRadius:5,
//   borderWidth:1,
//   borderColor:'#20366B',
//   paddingLeft:10

fontSize:wp('4%'), padding:15,
                        backgroundColor:'#fff',
                        shadowColor: "#20366B",
                        overflow: 'hidden',
                        borderRadius:2,
                        borderWidth:0.2,
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        shadowOffset: {
                          height: 1,
                          width: 1
                        }
 },





});