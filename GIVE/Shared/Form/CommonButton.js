import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

const CommonButton=({onPress,title,bgColor,textColor})=>{
    return(
        <TouchableOpacity 
        style={{
            backgroundColor:bgColor,
            justifyContent:'center',
            alignItems:'center',
            width:131,
            height:38.86,
            borderRadius:10,
            alignSelf:'center',
            marginTop:20,
            marginBottom:20
        }}
        onPress={()=>{
            onPress();
        }}>
            <Text style={{color:textColor,fontWeight:'bold',fontSize:21}}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton