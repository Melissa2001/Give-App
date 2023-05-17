import React from 'react';
import { ScrollView, Dimensions, StyleSheet, Text } from 'react-native';


var { width } = Dimensions.get('window');
const FormContainer = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container} >
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 400,
        width: width,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'white',

    },
    title: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 20,
        fontSize: 26.42,
        color: '#434343',
        fontWeight: 'bold'
    }
})
export default FormContainer;