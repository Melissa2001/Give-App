import React from 'react';
import { View, ScrollView, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import products from '../assets/data/products.json';
const { width, height } = Dimensions.get('window');

const ProductsContainer = () => {
  const cardWidth = width * 0.4;
  const cardMargin = width * 0.04;

  const handleCardPress = (productId) => {
    // Handle the card press event
    console.log('Card pressed:', productId);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {products.map((product) => (
          <TouchableOpacity
            key={product._id.$oid}
            style={[styles.productCard, { width: cardWidth, marginRight: cardMargin }]}
            onPress={() => handleCardPress(product._id.$oid)}
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
    paddingBottom: 20,
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
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
  },
  productImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default ProductsContainer;
