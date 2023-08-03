import React, { useState, useContext } from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import CommonButton from '../../Shared/Form/CommonButton';
import Error from '../../Shared/Error';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import baseURL from '../../assets/common/baseUrl';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { UserContext } from '../../contexts/userContexts';

const CreateOrg = () => {
  const navigation = useNavigation();
  const [desc, setDesc] = useState('');
  const [phone, setPhone] = useState('');
  const [upi, setUPI] = useState('');
  const [error, setError] = useState('');

  const { userId } = useContext(UserContext);

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

  const handleSubmit = async () => {
    if (desc === '' || phone === '' || upi === '') {
      setError('Please fill in the details');
    } else {
      try {
        const response = await axios.put(`${baseURL}organizations/${userId}`, {
          desc,
          phone,
          upi,
        });

        if (response.status === 200) {
          console.log('Success');
          navigation.navigate('Success');
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
        <View style={{ flexDirection: 'row' }}>
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
          <View style={styles.image}>
            <Pressable onPress={pickImageAsync}>
              <Image source={ImagePickerIcon} style={styles.icon} />
            </Pressable>
            <Text style={styles.text}>Upload RegNo certificate</Text>
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
        <CommonButton title={'Sign Up'} bgColor={'#9683dd'} onPress={() => handleSubmit()} />
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By signing up you agree to our{' '}
            <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Terms of service</Text> and{' '}
            <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Privacy policy</Text>
          </Text>
        </View>
      </FormContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  icon: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    // fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});

export default CreateOrg;
