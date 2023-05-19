import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import CommonButton from '../../Shared/Form/CommonButton';
import Error from '../../Shared/Error';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const image = require('../../assets/login.png');

    const handleSubmit = () => {
        if (email === "" || password === "") {
            setError("Please fill in your credentials");
        } else {
            console.log('Success');
            navigation.navigate('Home')

        }
        if (email != "" && password != "") {
            setError("");
        }
    }

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