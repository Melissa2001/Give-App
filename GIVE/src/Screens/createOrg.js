import React, { useState } from 'react';
import { View, Image, StyleSheet, Text ,Pressable} from 'react-native';
import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import CommonButton from '../../Shared/Form/CommonButton';
import Error from '../../Shared/Error';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import baseURL from '../../assets/common/baseUrl';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
   
    if (!result.cancelled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  const ImagePickerIcon = require('../../assets/ImageUploadIcon.png');

  const CreateOrg = () => {
    const navigation = useNavigation();
    const [desc, setDesc] = useState('');
    const [phone, setPhone] = useState('');
    const [upi, setUPI] = useState('');
    const [error, setError] = useState('');
   
    //const image = require('../../assets/give2.png');

    const handleSubmit = async () => {
      if (desc === '' || phone === '' || upi === '') {
        setError('Please fill the details');
      } 
      else {
        try {
          const response = await axios.post(`${baseURL}users/reg`, {
            desc,
            phone,
            upi,
          });
          if (response.status === 200) {
            console.log('Success');
            navigation.navigate('OTP');
          }
        } catch (error) {
          console.error(error);
          setError('Something went wrong. Please try again.');
        }
      }

    };

    return (
      <View style={{ backgroundColor: '#ffffff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Image source={image} style={{ alignSelf: 'center', resizeMode: 'contain' }} /> */}
        <FormContainer title={'Add more details'}>
          <View style={{flexDirection:'row'}}>
            <View style={styles.image}>
            <Pressable onPress={pickImageAsync}>
            <Image source={ImagePickerIcon} style={styles.icon} />
          </Pressable>
          <Text style={styles.text}>Upload Profile Picture</Text>
            </View>
          <View style={styles.image}>
          <Pressable onPress={pickImageAsync}>
            <Image source={ImagePickerIcon} style={styles.icon} />
          </Pressable>
          <Text style={styles.text}>Upload QRCODE</Text>
          </View>
          </View>
        
          <Input
            require
            placeholder={'Phone Number'}
            name={'phone'}
            id={'phone'}
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <Input
            require
            placeholder={'Description'}
            name={'desc'}
            id={'desc'}
            value={desc}
            onChangeText={(text) => setDesc(text)}
          />
         
            <Input
              require
              placeholder={'UPI ID'}
              name={'upi'}
              id={'upi'}
              value={upi}
              onChangeText={(text) => setUPI(text)}
            />
            
        

          {error ? <Error message={error} /> : null}
          <CommonButton title={'Sign Up'} bgColor={'#9683dd'} textColor={'#ffffff'} onPress={() => handleSubmit()} />


        </FormContainer>
      </View>
    );
  };

  const styles = StyleSheet.create({
    login: {
      marginBottom: 10,
      alignSelf: 'center',
      color: '#979797',
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10,
    },
    middleText: {
      marginBottom: 10,
      alignSelf: 'center',
      color: '#979797',
      fontSize: 15,
      textAlign: 'center',
    },
    icon: {
      width: 100,
      height: 100,
      marginRight: 8,
      marginBottom: 20,
    },
    text: {
      fontSize: 15,
      color: 'grey',
      fontWeight:'bold'
    },
    image:{
      alignItems:'center',
      padding:30
    }
  });

  export default CreateOrg;
