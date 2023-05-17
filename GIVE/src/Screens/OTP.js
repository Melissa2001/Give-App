import React from "react";
import {View,Text} from "react-native";
import { useNavigation } from "@react-navigation/native";

const OTP=()=>{
    const navigation=useNavigation();
    return(
        <View style={{flex:1}}>
<Text style={{justifyContent:'center',alignContent:'center',alignSelf:'center',marginVertical:350,textDecorationLine:'underline'}} onPress={()=>{navigation.navigate('Success')}} >Coming Soon, HEHE</Text>
        </View>
    )
}

export default OTP