import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
const Card = (props) => {
    const image = require('../assets/organization.png')
    const image2 = require('../assets/Map_Pin.png')
    const image3 = require('../assets/Paper_Plane.png')
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('OrgSingleHome')}>
            <View style={styles
                .cardContainer}>
                <Image style={styles.imageStyle} source={image}></Image>
                <View>
                    <Text style={styles.name}>Maryasadhanam</Text>
                    <Text style={styles.requirement}>1 requirement</Text>
                    <Image source={image3} style={styles.button}></Image>
                    <Text style={styles.location}><Image source={image2} ></Image>Kizhathadiyoor,Palai</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth - 40,
        backgroundColor: '#927FDB',
        height: 120,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row'
    },
    imageStyle: {
        height: 120,
        width: deviceWidth - 280,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    name: {
        margin: 15,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    requirement: {
        marginLeft: 15,
        marginTop: -10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#F59683'
    },
    button: { alignSelf: 'flex-end', marginTop: -5, marginRight: -40 },
    location: { marginLeft: 15, marginTop: 5, color: '#ffffff' }
})

export default Card
