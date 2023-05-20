import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity ,Dimensions} from 'react-native';

const ProductList = ({ item }) => {
  const imageSource = item.image || 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png';

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View>
        <Image style={styles.image} source={{ uri: imageSource }} resizeMode="contain" />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const width = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  cardContainer: {
    width:width/2-32,
    height:width/2-20,
    padding:30,
    borderRadius:20,
        marginTop:20,
        marginBottom:5,
        marginLeft:20,
        alignItems:'center',
        elevation:0.5,
        backgroundColor:'white',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: 8,
    color:'grey',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProductList;
