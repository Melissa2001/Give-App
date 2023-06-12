import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import baseURL from '../assets/common/baseUrl';

import Details from './Details';
const { width, height } = Dimensions.get('window');

const ProductsContainer = ({ categoryName }) => {
  const [products, setProducts] = useState([]);
  const cardWidth = width * 0.4;
  const cardMargin = width * 0.04;
  const navigation = useNavigation();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      let response;
      
      if (categoryName) {
        response = await axios.get(`${baseURL}categories?name=${categoryName}`);
        const categoryId = response.data._id;
        response = await axios.get(`${baseURL}products/sections?category=${categoryId}`);
      } else {
        response = await axios.get(`${baseURL}products`);
      }

      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleCardPress = (product) => {
    navigation.navigate('Details',{product})
    
    console.log('Card pressed:', product);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {products.map((product) => (
          <TouchableOpacity
            key={product._id.$oid}
            style={[styles.productCard, { width: cardWidth, marginRight: cardMargin }]}
            onPress={() => handleCardPress(product)}
          >
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingLeft: width * 0.04,
    paddingRight: width * 0.04,
    paddingBottom: 80,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    marginBottom: 20,
    height: height * 0.3,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2, 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  
  productImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
    
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft:20,
    color:'grey',
  },
});

export default ProductsContainer; 