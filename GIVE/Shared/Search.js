import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView,Dimensions } from 'react-native';


import axios from "axios";
import baseURL from '../assets/common/baseUrl';

var { width } = Dimensions.get('window');
const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = async(text) => {
    setSearchText(text);
    try {
      const response = await axios.get(`${baseURL}products/search?query=${text}`);
      const products = response.data;
      
      // Process the received products or update the state as needed
      console.log(products);
    } catch (error) {
      console.error('An error occurred while searching for products:', error);
    }
    // Perform search logic here based on the text
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
    </SafeAreaView>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width)
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop:20
  },
  container: {
    width: deviceWidth - 40,
    margin: 10,
  },
  input: {
    height: 40,
    borderWidth: 0.25,
    borderColor: '#707070',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
