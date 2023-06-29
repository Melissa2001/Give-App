import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions ,TouchableOpacity} from 'react-native';
import CommonButton from './Form/CommonButton';
import baseURL from '../assets/common/baseUrl';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Chat from '../src/Screens/ChatAndGratitude/Chat';
const { width } = Dimensions.get('window');

const Details = ({ route }) => {
  const report = require('../assets/report.png')
  const { product } = route.params;
  const [userName, setUserName] = useState('');
  const navigation = useNavigation();
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
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.reportIconContainer}
        onPress={() => {
          // Handle report icon press
        }}
      >
      </TouchableOpacity>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.heading}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      {/* Render other product details */}
      <Text style={styles.heading}>Contact</Text>
      <Text style={styles.contactname}>{userName}</Text>
      <View style={styles.buttonContainer}>
      <CommonButton
          onPress={() => {
            navigation.navigate('Chat');
          }}
          title="Message"
          bgColor="#4CAF50"
          textColor="#FFFFFF"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingHorizontal: 20,
    
  },
  reportIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  image: {
    marginTop: 40,
    alignSelf: 'center',
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: 20,
  },
  heading: {
    marginTop: 40,
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#9683DD',
    marginBottom: 20,
  },
  description: {
    marginTop: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
    marginBottom: -10,
    fontSize: 16,
    lineHeight: 24,
  },
  contactname: {
    marginHorizontal: 10,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: -50,
    left:130
  },
  reportIconContainer:{

  }
});

export default Details;
