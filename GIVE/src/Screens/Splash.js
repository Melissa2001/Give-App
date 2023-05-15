import { View, Text,Image } from "react-native";
import React ,{useEffect} from "react";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Login');
        },3000);
    },[]);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image 
            source={require('../../assets/giveLogo.png')}
            style={{width:400,height:400}}/>
    </View>
  );
};

export default Splash;
