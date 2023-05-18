import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

const Home = ()=> {
    const navigation = useNavigation();

   return (
    <View style={{flex: 1}}>
      <View 
      style={{
           width: '100%',
           height: 70,
           backgroundColor: '#fff',
           position: 'absolute',
           bottom: 0,
           flexDirection: 'row',
          alignItems: 'center',
          borderRadius:40
      }}>
           <TouchableOpacity
                style={{
                    width: '20%',
                    height:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                <Image 
                    source={require ('../../assets/HomeIcon.png')}
                    style={{width:24,height:24}}
                    />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '20%',
                    height:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                <Image 
                    source={require ('../../assets/OrganizationIcon.png')}
                    style={{width:24,height:24}}
                    />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '20%',
                    height:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                <Image 
                    source={require ('../../assets/SellIcon.png')}
                    style={{width:44,height:44}}
                    />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '20%',
                    height:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                <Image 
                    source={require ('../../assets/ChatIcon.png')}
                    style={{width:24,height:24}}
                    />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '20%',
                    height:'100%',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                <Image 
                    source={require ('../../assets/ProfileIcon.png')}
                    style={{width:24,height:24}}
                    />
            </TouchableOpacity>
         </View>
    </View>
   );
};

export default Home;
