import React, { useState,useContext } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import CommonButton from '../../Shared/Form/CommonButton';
import Error from '../../Shared/Error';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import baseURL from '../../assets/common/baseUrl';
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../../contexts/userContexts';
const SignUp = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [regno, setRegno] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const image = require('../../assets/give2.png');
  const { updateUserId } = useContext(UserContext);
  const isEmailValid = (email) => {
    // Regular expression pattern to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (email === '' || password === '' || name === '') {
      setError('Please fill in your credentials');
    } else if (!isEmailValid(email)) {
      setError('Please enter a valid email address');
    } else {
      if (regno) {
        // Registration number is filled, save details in the "organizations" table
        createOrganization();
      } else {
        // Registration number is not filled, save details in the "users" table
        createUser();
      }
    }
  };
  
  const createOrganization = async () => {
    try {
      const response = await axios.post(`${baseURL}organizations/reg`, {
        email,
        password,
        name,
        regno,
      });
      if (response.status === 200) {
        console.log('Success');
        // navigation.navigate('OTP');
        updateUserId(response.data._id,'organizations',false);
        navigation.navigate('CreateOrg');
      }
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
    }
  };
  
  const createUser = async () => {
    try {
      const response = await axios.post(`${baseURL}users/reg`, {
        email,
        password,
        name,
      });
      if (response.status === 200) {
        console.log('Success');
        // navigation.navigate('OTP');
        updateUserId(response.data._id, 'users', false);
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error(error);
      setError(error.response.data.message);
    }
  };
  return (
    <View style={{ backgroundColor: '#ffffff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={image} style={{ alignSelf: 'center', resizeMode: 'contain', margin: 40 }} />
      <FormContainer title={'Create an account'}>
        <Input
          require
          placeholder={'Name'}
          name={'name'}
          id={'name'}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          require
          placeholder={'Email ID'}
          name={'email'}
          id={'email'}
          value={email}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />
          <View style={styles.passwordContainer}>
          <Input
            require
            placeholder={'Password'}
            name={'password'}
            id={'password'}
            secureTextEntry={showPassword} 
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color="#888888"
            style={styles.passwordIcon}
            onPress={() => setShowPassword(!showPassword)} 
          />
          </View>
        <Input
          placeholder={'Registration no.'}
          name={'regno'}
          id={'regno'}
          value={regno}
          onChangeText={(text) => setRegno(text)}
        />

        <Text style={styles.middleText}>
          *If you are an organization enter {'\n'}register number
        </Text>

        {error ? <Error message={error} /> : null}
        <CommonButton title={'Sign Up'} bgColor={'#9683dd'} textColor={'#ffffff'} onPress={() => handleSubmit()} />

        <Text style={styles.login}>
          Already have an account?
          <Text style={{ color: '#f59683', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Login')}>
            {' '}
            Log in
          </Text>
        </Text>
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
});

export default SignUp;
