import React, { useState } from "react";
import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
var { width } = Dimensions.get("window")
const OrgSingleHome = () => {
    const image=require('../assets/qrcode.png')
    const image1 = require('../assets/organization.png')
    return (

        <ScrollView style={{ padding: 5 ,backgroundColor:'white'}}>
            <Image
                source={image1}
                resizeMode="cover"
                style={styles.image}
            />
            <Text style={styles.heading}>Mariyasadhanam</Text>
            <Text style={styles.req}>requirements</Text>
            <Text style={styles.description}>An NGO located at Palai.</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => {
                        onPress();
                    }}>
                    <Text style={styles.buttonFont}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button2}
                    onPress={() => {
                        onPress();
                    }}>
                    <Text style={styles.buttonFont}>View Location</Text>
                </TouchableOpacity>
            </View>
            <View style={styles
                .cardContainer}>
                <View>
                    <Text style={styles.name}>Donate</Text>
                    <Text style={styles.location}>Acc. No : 12345678</Text>
                    <Text style={styles.location}>UPI ID : ybl@123456789</Text>
                </View>
                <Image style={styles.qr}source={image}></Image>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    image: {
        height: width,
        width: width,
        borderRadius: 20,
        alignSelf: 'center'
    },
    heading: {
        fontWeight: 'bold',
        color: '#434343',
        fontSize: 25,
        padding: 20
    },
    description: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        paddingBottom: 10
    },
    button1: {
        backgroundColor: '#4caf50',
        width: 131,
        height: 38.86,
        borderRadius: 10,
        margin: 30,
    },
    button2: {
        backgroundColor: '#F59683',
        width: 131,
        height: 38.86,
        borderRadius: 10,
        margin: 30,
    },
    buttonFont: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 5
    },
    cardContainer: {
        width: width-10,
        backgroundColor: '#927FDB',
        height: 120,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        alignSelf:'center'
    },
    name: {
        marginLeft: 20,
        marginBottom:15,
        marginTop:15,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    qr:{
        alignSelf:'center',
        marginLeft:80
    },
    req:{
        color:'red',
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        paddingBottom: 25
    },
    location: { marginLeft: 20, marginTop: 5, color: '#ffffff',fontWeight:'bold' }
})

export default OrgSingleHome