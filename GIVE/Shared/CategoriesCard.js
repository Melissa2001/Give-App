import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 20) / 2; 
const data = [
  { id: '1', title: 'Medical Appliances',color:'#FBDBD4' },
  { id: '2', title: 'Cloths',color:'#FAECD3' },
  { id: '3', title: 'Food',color:'#E7D4C1' },
  { id: '4', title: 'Volunteering',color:'#C4ECE0' },
  { id: '5', title: 'Others',color:'#CADCE6' },
];

const CategoriesCard = () => {
  const renderCard = ({ item }) => {
    const cardStyle = { ...styles.card, backgroundColor: item.color };
    return (
      <TouchableOpacity style={cardStyle}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  flatListContent: {
    justifyContent: 'space-between',
  },
  card: {
    width: cardWidth,
    height: cardWidth,
    backgroundColor: 'lightgray',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },
});

export default CategoriesCard;
