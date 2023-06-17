import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
var { width } = Dimensions.get("window")
const SingleOrg = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState('');
    const image=require('../../assets/qrcode.png')
    return (

        <ScrollView style={{ padding: 5 }}>


            <Image
                source={{
                    uri: item.image ? item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                }}
                resizeMode="cover"
                style={styles.image}
            />
            <Text style={styles.heading}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
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
    location: { marginLeft: 20, marginTop: 5, color: '#ffffff',fontWeight:'bold' }
})

export default SingleOrg