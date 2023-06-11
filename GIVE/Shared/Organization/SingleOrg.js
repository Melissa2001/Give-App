import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
var { width } = Dimensions.get("window")
const SingleOrg = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState('');

    return (

        <ScrollView style={{ marginBottom: 80, padding: 5 }}>


            <Image
                source={{
                    uri: item.image ? item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                }}
                resizeMode="cover"
                style={styles.image}
            />
            <Text style={styles.heading}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    onPress();
                }}>
                <Text style={styles.buttonFont}>Message</Text>
            </TouchableOpacity>
           


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
        paddingBottom:10
    },
    button: {
        backgroundColor: '#4caf50',
        width: 131,
        height: 38.86,
        borderRadius: 10,
        margin: 20,    
    },
    buttonFont:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
       alignSelf:'center',
       padding:5
    }
})

export default SingleOrg