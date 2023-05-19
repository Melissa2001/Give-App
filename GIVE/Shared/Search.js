import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView } from 'react-native';


const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop:50
  },
  container: {
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
