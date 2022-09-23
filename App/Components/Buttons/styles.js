
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Dimensions,
  PixelRatio
} from 'react-native';

const imageWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
    wrapper: {
   
        // alignItems: 'center',
       
        borderRadius:0,
        borderWidth:1,
        borderRadius:5
        
       
        // paddingTop: StatusBar.currentHeight,
        // paddingBottom: StatusBar.currentHeight
      },
      buttonText: {
         
        alignItems: 'center',
        fontWeight:'400',
       
      
        textAlign:'center',
      },
      btnwrapper:{
       
       
        marginTop:15,
  
       
        
      }
});
