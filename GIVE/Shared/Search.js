import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView, Dimensions, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from "axios";
import baseURL from '../assets/common/baseUrl';

var { width } = Dimensions.get('window');

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

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

  const renderSelectedItem = () => {
    if (selectedItem) {
      return (
        <View style={styles.selectedItemContainer}>
          <Text style={styles.selectedItemText}>Name: {selectedItem.name}</Text>
          <Text style={styles.selectedItemText}>Description: {selectedItem.description}</Text>
          <Text style={styles.selectedItemText}>Brand: {selectedItem.brand}</Text>
          <Text style={styles.selectedItemText}>Category: {selectedItem.category}</Text>
          {/* Render other details as needed */}
        </View>
      );
    }
    return null;
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
        <FlatList
          data={searchResults}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.id.toString()}
        />
        {renderSelectedItem()}
      </View>
    </SafeAreaView>
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
