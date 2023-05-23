import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';


import CategoriesCard from '../../Shared/CategoriesCard';
// import SellForm from '../../Shared/SellForm';

var { width } = Dimensions.get('window');

const Sell = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>What are you offering?</Text>
      <CategoriesCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 40,
  },

});

export default Sell;
