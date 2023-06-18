import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import CommonButton from '../../Shared/Form/CommonButton'
import { useNavigation } from "@react-navigation/native";




const Profile = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('EditProfile');
    console.log('Button pressed!');
  };

  const image=require('../../assets/profile.png')
    return (
       <View>
        <Image
                source={image}
                style={{ alignSelf: 'center', resizeMode: 'contain',height:150,width:150,marginTop:100}}
            />
        <CommonButton title={'Edit Profile'}  textColor={'#9683dd'} onPress={() => handlePress()}/>
       </View>
       
      );
    }

export default Profile