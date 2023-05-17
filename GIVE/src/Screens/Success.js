import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import FormContainer from '../../Shared/Form/FormContainer';
import CommonButton from '../../Shared/Form/CommonButton';
import { useNavigation } from "@react-navigation/native";

const Success = () => {
    const navigation = useNavigation();
    const image = require('../../assets/give2.png');
    const image2 = require('../../assets/successtick.png');
    const image3 = require('../../assets/success.png');

    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={image}
                style={{ alignSelf: 'center', resizeMode: 'contain', marginBottom: 70, marginTop: 90 }}
            />
            <FormContainer title={"Success!"} >
                <Text style={styles.middleText}>
                    You have successfully created an account
                </Text>
                <Image
                    source={image2}
                    style={{ alignSelf: 'center', resizeMode: 'contain' }}
                />


                <CommonButton title={'Continue'} bgColor={'#9683dd'} textColor={'#ffffff'}
                    onPress={() => { navigation.navigate('Login') }} />

            </FormContainer>
            <Image
                source={image3}
                style={{ alignSelf: 'center', resizeMode: 'contain' }}
            />

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
        marginBottom: 30,
        alignSelf: "center",
        color: '#979797',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Success