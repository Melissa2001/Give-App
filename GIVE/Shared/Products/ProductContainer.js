import { View, Text, StyleSheet, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

import ProductList from './ProductList';

const data = require('../../assets/data/products.json');

const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <View>
      <Text style={styles.recommendationsText}>Recommendations</Text>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => <ProductList key={item.id} item={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recommendationsText: {
    marginLeft:20,
    fontWeight: 'bold',
    color:'grey',
    fontSize: 25,
  },
});

export default ProductContainer;
