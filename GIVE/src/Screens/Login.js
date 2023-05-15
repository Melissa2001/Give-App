import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';
import CommonButton from '../../Shared/Form/CommonButton';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const image = require('../../assets/login.png');
    const tick = require('../../assets/tick.png')
    return (
        <View style={{ backgroundColor: '#ffffff' }}>
            <Image
                source={image}
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

                <Image
                    source={tick}
                    style={{position:'absolute', top:211,left:37}}
                />
                <Text style={{ position: 'absolute', top: 210, left: 58, color: '#434343', fontSize: 15 }}>Remember me
                </Text>
                <Text style={{ position: 'absolute', top: 210, right: 37, color: '#434343', fontSize: 15 }}>Forgot Password
                </Text>

                <CommonButton title={'Log In'} bgColor={'#9683dd'} textColor={'#ffffff'}
                    onPress={() => {

                    }} />

                <Text style={styles.middleText}>
                    New User?
                    <Text style={{ color: '#f59683' }}> Create New Account</Text>
                    
                </Text>
                <Text style={{ color: '#f59683',alignSelf:'center' }}>Skip</Text>
                
            </FormContainer>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        width: '80%',
        alignItems: 'center',
    },
    middleText: {
        marginBottom: 20,
        alignSelf: "center",
        marginTop:40,
         color: '#f59683'
    }
})

export default Login