import React  from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CommonButton from './Form/CommonButton';
import baseURL from '../assets/common/baseUrl';
import { useState,useEffect} from 'react';
import axios from 'axios';

const Details = ({ route }) => {
  const { product } = route.params;
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetchUserName();
  }, []);

  const fetchUserName = async () => {
    try {
      const response = await axios.get(`${baseURL}users/fetchUsername/${product.userId}`);
      const { name } = response.data;
      setUserName(name);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.heading}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      {/* Render other product details */}
      <Text style={styles.heading}>Contact</Text>
      <Text style={styles.contactname}>{userName}</Text>
      <View style={styles.buttonContainer}>
        <CommonButton
          onPress={() => {
            // Handle button press
          }}
          title="Message"
          bgColor="#4CAF50"
          textColor="#FFFFFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 40,
    alignSelf: 'center',
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  heading: {
    marginTop: 40,
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#9683DD',
  },
  description: {
    marginTop: 20,
    alignSelf: 'center',
    margin: 40,
    marginBottom: -10,
    fontSize: 16,
    lineHeight: 24,
  },
  contactname: {
    margin: 40,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 125,
    right: 40,
  },
});

export default Details;
