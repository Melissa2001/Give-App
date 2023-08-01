import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";
import { useNavigation } from "@react-navigation/native";

const OrganizationCard = (props) => {
  const navigation = useNavigation();
  const image2 = require('../../assets/Map_Pin.png');
  const image3 = require('../../assets/Paper_Plane.png');
  const image1 = require('../../assets/organization.png');
  const image4 = require('../../assets/traash.png');
  const { name, requirement,id } = props;
  const [org, setOrg] = useState([]);

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const fetchOrganizations = async () => {
    try {
      const response = await axios.get(`${baseURL}organizations`);
      if (response.status === 200) {
        setOrg(response.data);
      }
    } catch (error) {
      console.error('Error fetching organizations:', error);
    }
  };

  const handleDeleteOrganization = async (orgid) => {
    try {
      await axios.delete(`${baseURL}organizations/${orgid}`);
      // After successful deletion, call fetchOrganizations to update the organization list
      fetchOrganizations();
    } catch (error) {
      console.error('Error deleting organization:', error);
    }
  };

  return (
    <View style={styles.cardContainer}>
      <Image style={styles.imageStyle} source={image1}></Image>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.title}>{name}</Text>
          <TouchableOpacity onPress={()=>{handleDeleteOrganization({id})}}>
            <Image source={image4} style={{ margin: 20 }} />
          </TouchableOpacity>
        </View>
        {requirement > 0 ? null : (
          <Text
            style={{
              marginTop: -10,
              color: '#F59683',
              fontWeight: 'bold',
              marginLeft: 35,
            }}
          >
            1 requirement
          </Text>
        )}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChatGratitude');
          }}
        >
          <Image source={image3} style={styles.button}></Image>
        </TouchableOpacity>
        {/* <Text style={styles.brand}><Image source={image2} ></Image>{brand}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#927FDB',
    height: Dimensions.get('window').width / 3,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  card: {
    marginBottom: 40,
    height: Dimensions.get('window').width / 2 - 20 - 90,
    width: Dimensions.get('window').width / 2 - 20 - 10,
    marginLeft: 15,
  },
  title: {
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  imageStyle: {
    height: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width - 280,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  // brand: {
  //     marginTop: 5,
  //     color:'#ffffff',
  //     fontWeight:'bold'
  // },
  button: { marginTop: -5, left: 150, justifyContent: 'center' },
});

export default OrganizationCard;
