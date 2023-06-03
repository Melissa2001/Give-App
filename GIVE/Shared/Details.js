import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Details;