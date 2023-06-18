import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductsContainer from './ProductContainer';
import { useRoute } from '@react-navigation/native';

const CategoriesMain = () => {
  const route = useRoute();
  const { category } = route.params;

  return (
    <View style={styles.container}>
  
  <ProductsContainer categoryName={category} />
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default CategoriesMain;
