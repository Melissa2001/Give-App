import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, Dimensions, Text, FlatList, TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import baseURL from '../assets/common/baseUrl';
import Details from './Details';
var { width } = Dimensions.get('window');

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigation=useNavigation();
  const handleSearch = async (text) => {
    setSearchText(text);
    try {
      const response = await axios.get(`${baseURL}products/search?query=${text}`);
      const products = response.data;
      setSearchResults(products);
    } catch (error) {
      console.error('An error occurred while searching for products:', error);
    }
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    navigation.navigate('Details', { product: item });
  };
  const handlePressOutside = () => {
    setSearchText("");
    setSearchResults([]);
    setSelectedItem(null);
    Keyboard.dismiss();
  };

  const renderProductItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.brand}>Brand: {item.brand}</Text>
        <Text style={styles.category}>Category: {item.category}</Text>
        {/* Render other details as needed */}
      </View>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
        <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={handleSearch}
            value={searchText}
          />
        <FlatList
          data={searchResults}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
        />
    </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 20
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
  itemContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    fontSize: 16,
    color: '#888888',
  },
  brand: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  category: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedItemContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 10,
  },
  selectedItemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default SearchBar;
