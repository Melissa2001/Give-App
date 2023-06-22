import React, { useState,useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import CommonButton from '../../Shared/Form/CommonButton';
import Error from '../../Shared/Error';

import axios from "axios";
import baseURL from '../../assets/common/baseUrl';
import { UserContext } from '../../contexts/userContexts';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const image = require('../../assets/login.png');

    const { updateUserId } = useContext(UserContext);

    const handleSubmit = async () => {
        if (email === '' || password === '') {
          setError('Please fill in your credentials');
        } else {
          try {
            let user = null;
            let org = null;
      
            // Check if the email belongs to a user
            const userResponse = await axios.post(`${baseURL}users/login`,{email,password});
            if (userResponse.data.length > 0) {
              user = userResponse.data[0];
              if (user.password !== password) {
                setError('Incorrect password');
                return;
              }
            }
      
            // Check if the email belongs to an organization
            const orgResponse = await axios.post(`${baseURL}organizations/login`,{email,password});
            if (orgResponse.data.length > 0) {
              org = orgResponse.data[0];
              if (org.password !== password) {
                setError('Incorrect password');
                return;
              }
            }
      
            if (user) {
              updateUserId(user._id);
              navigation.navigate('Home');
            } else if (org) {
              updateUserId(org._id);
              navigation.navigate('Home');
            } else {
              setError('User not found');
            }
          } 
          catch (error) {
            console.error(error);
            setError(error);
          }
        }
      };
      

    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={image}
                style={{ alignSelf: 'center', resizeMode: 'contain' }}
            />
            <FormContainer title={"Hey, Welcome!"} >

                <Input
                    placeholder={"Email ID"}
                    name={"email"}
                    id={"email"}
                    value={email}
                    onChangeText={(text) => setEmail(text.toLowerCase())}
                />
                <Input
                    placeholder={"Password"}
                    name={"password"}
                    id={"password"}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />


                <Text style={{ marginLeft: 250, color: '#f59683', fontSize: 15, marginTop: -10 }} onPress={() => { navigation.navigate('ForgotPass') }}>Forgot Password
                </Text>
                {/* <Text style={{ position: 'absolute', top: 210, right: 37, color: '#434343', fontSize: 15 }}>Forgot Password
                </Text> */}
                {error ? <Error message={error} /> : null}
                <CommonButton title={'Log In'} bgColor={'#9683dd'} textColor={'#ffffff'}
                    onPress={() => { handleSubmit() }} />

                <Text style={styles.middleText}>
                    New User?
                    <Text style={{ color: '#f59683', textDecorationLine: 'underline' }} onPress={() => { navigation.navigate('SignUp') }}> Create New Account</Text>

                </Text>

            </FormContainer>

        </View>
    )
}

const styles = StyleSheet.create({
    middleText: {
        marginBottom: 10,
        alignSelf: "center",
        marginTop: 50,
        color: '#979797',
        fontSize: 15,
        textAlign: 'center'
    }
})

export default Login