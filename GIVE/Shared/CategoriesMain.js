import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProductsContainer from './ProductContainer';

const CategoriesMain = ({ route }) => {
  const { category } = route.params;

  return (
    <View style={styles.container}>
      <ProductsContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default CategoriesMain;
