import React from 'react'
import {
    StyleSheet,
    View,
    Dimensions,
    Image,
    Text
} from 'react-native'

var { width } = Dimensions.get("window")

const OrganizationCard = (props) => {
    // const image2 = require('../../assets/Map_Pin.png')
    // const image3 = require('../../assets/Paper_Plane.png')
    const { name, brand, image, countInStock} = props;
    return (
        <View style={styles.cardContainer}>
            {/* <Image style={styles.imageStyle} source={{ uri: image?image:'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'}} /> */}
            <View style={styles.card}>
                <Text style={styles.title}>
                    {name}
                </Text>
                {countInStock < 0 ? null : <Text style={{ marginTop:-10,color:'#F59683',fontWeight:'bold',marginLeft:35}}>1 requirement</Text>}
                {/* <Image source={image3} style={styles.button}></Image> */}
                {/* <Text style={styles.brand}><Image source={image2} ></Image>{brand}</Text> */}
                
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    cardContainer: {
        width: width - 40,
        backgroundColor: '#907ad6',
        height: width / 3,
        borderRadius: 20,
        marginTop: 30,
        marginBottom: 5,
        marginLeft: 20,
        alignItems: "center",
        flexDirection: 'row',
        

    },
    card: {
        marginBottom: 40,
        // height: width / 2 - 20 - 90,
        // width: width / 2 - 20 - 10,
        marginLeft:15
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        color:'white',
        margin:30
    },
    // brand: {
    //     marginTop: 5,
    //     color:'#ffffff',
    //     fontWeight:'bold'
    // },
    // button: { alignSelf: 'flex-end', marginTop: -5, left: 150,justifyContent:'center' },
})
export default OrganizationCard