import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/give2.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 120,
    height: 50,
    marginTop:45,
    marginLeft:-1,
    resizeMode: 'contain',
  },
});

export default TopBar;
