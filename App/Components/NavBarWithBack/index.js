import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//components
import Colors from '../../../utils';



class NavBarDefault extends React.Component {

    route = () => {
        const { onPress } = this.props;
        onPress();
    }

    onPressBack = () => {
        const { onPressBack } = this.props;
        onPressBack();
    }

    render() {
        return (
            <View style={styles.navbar}>
      
                <View style={{flex:1,alignSelf:'center',flexDirection:'row',paddingLeft:wp('2%')}}>
                  
                       <Icon name="chevron-back-outline" size={30} color={'#E84C4F'} onPress={()=>this.onPressBack()} /> 
                       {/* <TouchableOpacity onPress={()=>this.onPressBack()}>
                           <Text style={{paddingLeft:wp('2%'),color:Colors.black,paddingTop:wp('1.5%')}}>Back</Text>
                       </TouchableOpacity>
               */}
                </View>
       
              
             
            
                    <View style={{alignSelf:'center'}}>
                         <Text style={{  fontSize: wp('4.5%'), fontSize: wp('6%'),alignSelf:'center',color:Colors.black,alignSelf:'center' }}>{this.props.name}</Text>
                    </View>
                  
                    <View style={{flex:1,alignSelf:'center'}}>
                         
                    </View>
                  
                  
                    
                    {/* <Icon 
                                name='filter'
                                size={wp('5%')}
                                color='black'
                                onPress={()=>this.onPressStar()}
                                style={{
                                   marginRight: wp('5%'),
                                }} 
                          />
                 */}

                    {/* <TouchableOpacity onPress={() => this.route()}>
                        <Image
                            style={{ width: 20, height: 20, marginRight: 10,marginBottom:5,}}
                            source={require('../../images/arrow.png')}
                        />
                    </TouchableOpacity> */}
                </View>
           
        );
    }
}

const styles = {
    navbar: {
       
        height:(wp('15%')),
        flexDirection:'row',
        backgroundColor: 'white',
        elevation: 0,
        alignContent: 'center',
    }
}

export default NavBarDefault;
