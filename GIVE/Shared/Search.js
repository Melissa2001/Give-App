import React, { useState } from 'react';
import { View, TextInput, StyleSheet, SafeAreaView,Dimensions } from 'react-native';


var { width } = Dimensions.get('window');
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
