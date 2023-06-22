import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const SingleOrg = (props) => {
    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState('');
    const image = require('../../assets/qrcode.png');

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
            <Text style={styles.req}>Requirements</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => onPress()}>
                    <Text style={styles.buttonFont}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => onPress()}>
                    <Text style={styles.buttonFont}>View Location</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <View>
                    <Text style={styles.name}>Donate</Text>
                    <Text style={styles.location}>Acc. No : 12345678</Text>
                    <Text style={styles.location}>UPI ID : ybl@123456789</Text>
                </View>
                <Image style={styles.qr} source={image} />
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
        fontSize: 0.05 * width,
        padding: 0.05 * width,
        marginLeft:0.04 * width
    },
    description: {
        paddingLeft: 0.05 * width,
        paddingRight: 0.05 * width,
        fontSize: 0.04 * width,
        paddingBottom: 0.02 * width,
        marginLeft:0.04 * width

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 0.03 * width,
    },
    button: {
        backgroundColor: '#4caf50',
        width: 0.35 * width,
        height: 0.06 * height,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonFont: {
        fontSize: 0.04 * width,
        color: 'white',
        fontWeight: 'bold',
    },
    cardContainer: {
        width: 0.85 * width,
        backgroundColor: '#927FDB',
        height: 0.17 * height,
        borderRadius: 20,
        marginTop: 0.03 * width,
        marginBottom: 0.08 * width,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 0.05 * width,

    },
    name: {
        fontSize: 0.04 * width,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    qr: {
        alignSelf: 'center',
    },
    req: {
        color: 'red',
        paddingLeft: 0.05 * width,
        paddingRight: 0.05 * width,
        fontSize: 0.04 * width,
        paddingBottom: 0.05 * width,
        marginLeft:0.04 * width
    },
    location: {
        marginTop: 0.01 * width,
        color: '#ffffff',
        fontWeight: 'bold'
    }
});

export default SingleOrg;
