import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Error = (props) => {
    return ( 
        <Text style={styles.text}>{props.message}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        alignSelf:'center',
        color: 'red',
        marginTop:50,
        marginBottom:-20
    }
})

export default Error