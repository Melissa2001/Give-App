import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';


const Card = () => {
  const image = require('../assets/MessageIcon.png')
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/OrganizationImage.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Organization Name</Text>
        <Text style={styles.description}>No of Requirments</Text>
        <Text style={styles.location}>Location</Text>
        <Image
        source={image}
        style={{
          marginLeft:260,
          marginTop: -25,
        }
        }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop:80,
    flexDirection: 'row',
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#927FDB',
    height:150,
  },
  imageContainer: {
    width: '25%',
  },
  image: {
    width: '100%',
    height:150,

    aspectRatio: 0.9, 
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginTop:15,
    marginLeft:60,
    fontSize: 24,
    fontWeight: 'bold',
    color:'#ffff'
  },
  description: {
    color:'#F59683',
    marginLeft:60,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  location:{
    fontSize: 19,
    fontWeight: 'bold',
    color:'#ffff',
    marginLeft:60,
    marginTop: 20,



  }
});

export default Card;
