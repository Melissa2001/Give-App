import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';


import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import CommonButton from '../../Shared/Form/CommonButton';
import Error from '../../Shared/Error';
import { useNavigation } from "@react-navigation/native";

import axios from "axios";
import baseURL from '../../assets/common/baseUrl';

const SignUp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState("");
    const [regno, setRegno] = useState("");
    const [error, setError] = useState("");
    const image = require('../../assets/give2.png');
    const handleSubmit = async () => {
        if (email === "" || password === "" || name==="") {
            setError("Please fill in your credential");
        } 
        else {
            try {
                const response = await axios.post(`${baseURL}users/reg`, { email, password,name,regno });
                if (response.status === 200) {
                    console.log('Success');
                    navigation.navigate('OTP')
                }
              } catch (error) {
                console.error(error);
                setError("Something went wrong. Please try again.");
              }
            // console.log('Success');
            // setError("");
            // navigation.navigate('OTP')
        }
    }
    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={image}
                style={{ alignSelf: 'center', resizeMode: 'contain', margin: 40 }}
            />
            <FormContainer title={"Create an account"} >
                <Input require
                    placeholder={"Name"}
                    name={"name"}
                    id={"name"}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input require
                    placeholder={"Email ID"}
                    name={"email"}
                    id={"email"}
                    value={email}
                    onChangeText={(text) => setEmail(text.toLowerCase())}
                />
                <Input require
                    placeholder={"Password"}
                    name={"password"}
                    id={"password"}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Input
                    placeholder={"Registration no."}
                    name={"regno"}
                    id={"regno"}
                    secureTextEntry={true}
                    value={regno}
                    onChangeText={(text) => setRegno(text)}
                />

                <Text style={styles.middleText}>
                    *If you are an organization enter {"\n"}register number
                </Text>

                {error ? <Error message={error} /> : null}
                <CommonButton title={'Sign Up'} bgColor={'#9683dd'} textColor={'#ffffff'}
                    onPress={() => { handleSubmit()  }} />

                <Text style={styles.login}>
                    Already have an account?
                    <Text style={{ color: '#f59683', textDecorationLine: 'underline' }} onPress={() => { navigation.navigate('Login') }}> Log in</Text>

                </Text>

            </FormContainer>

        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        marginBottom: 10,
        alignSelf: "center",
        color: '#979797',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10
    },
    middleText: {
        marginBottom: 10,
        alignSelf: "center",
        color: '#979797',
        fontSize: 15,
        textAlign: 'center'
    }
})

export default SignUp