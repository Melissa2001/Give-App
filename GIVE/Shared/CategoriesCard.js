import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet ,Image} from 'react-native';


const { width } = Dimensions.get('window');
const cardWidth = (width - 20) / 2; 
const data = [
  { id: '1', title: 'Medical Appliances',color:'#FBDBD4' ,image:require('../assets/medicalIcon.png')},
  { id: '2', title: 'Cloths',color:'#FAECD3',image:require('../assets/clothIcon.png') },
  { id: '3', title: 'Books',color:'#E7D4C1',image:require('../assets/booksIcon.png') },
  { id: '4', title: 'Volunteering',color:'#C4ECE0',image:require('../assets/volunteeringIcon.png') },
  { id: '5', title: 'Others',color:'#CADCE6',image:require('../assets/othersIcon.png') },
];

const CategoriesCard = () => {
  const renderCard = ({ item }) => {
    const cardStyle = { ...styles.card, backgroundColor: item.color };
    return (
      <TouchableOpacity style={cardStyle}>
        <Image source={item.image} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{item.title}</Text>
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
  cardTitle:{
    color:'grey',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: -5,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
    alignSelf: 'center',
  },
  
});

export default CategoriesCard;
