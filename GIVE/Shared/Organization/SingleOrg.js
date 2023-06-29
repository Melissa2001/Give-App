import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import axios from 'axios';
import baseURL from '../../assets/common/baseUrl';

const { width, height } = Dimensions.get("window");

const SingleOrg = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      const response = await axios.get(`${baseURL}requirements/${item._id}`);
      setRequirements(response.data);
    } catch (error) {
      console.error('Error fetching requirements:', error);
    }
  };

  const image = require('../../assets/qrcode.png');

  return (
    <ScrollView style={{ padding: 5, backgroundColor: 'white' }}>
      {/* <Image
        source={{
          uri: item.image ? item.image : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
        }}
        resizeMode="cover"
        style={styles.image}
      /> */}
      <Text style={styles.heading}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      {requirements.length > 0 ? (
        <View style={styles.requirementsContainer}>
          <Text style={styles.req}>Requirements</Text>
          {requirements.map((requirement, index) => (
            <Text key={requirement._id} style={styles.requirementItem}>
              {index + 1}. {requirement.requirement}
            </Text>
          ))}
        </View>
      ) : (
        <Text style={styles.noRequirementsText}>No requirements available.</Text>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onPress()}>
          <Text style={styles.buttonFont}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onPress()}>
          <Text style={styles.buttonFont}>View Location</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.name}>Donate</Text>
          <Text style={styles.location}>Acc. No : {item.account_number}</Text>
          <Text style={styles.location}>UPI ID : {item.upid}</Text>
        </View>
        <Image style={styles.qr} source={image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // image: {
  //     height:width,
  //     width: width,
  //     borderRadius: 20,
  //     alignSelf: 'center'
  // },
  heading: {
    fontWeight: 'bold',
    color: '#434343',
    fontSize: 0.05 * width,
    padding: 0.05 * width,
    marginLeft: 0.04 * width
  },
  description: {
    paddingLeft: 0.05 * width,
    paddingRight: 0.05 * width,
    fontSize: 0.04 * width,
    paddingBottom: 0.02 * width,
    marginLeft: 0.04 * width
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 0.03 * width,
  },
  button: {
    backgroundColor: '#4caf50',
    width: 0.35 * width,
    height: 0.06 * height,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonFont: {
    fontSize: 0.04 * width,
    color: 'white',
    fontWeight: 'bold',
  },
  cardContainer: {
    width: 0.85 * width,
    backgroundColor: '#927FDB',
    height: 0.17 * height,
    borderRadius: 20,
    marginTop: 0.03 * width,
    marginBottom: 0.08 * width,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0.05 * width,
  },
  name: {
    fontSize: 0.04 * width,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  qr: {
    alignSelf: 'center',
  },
  req: {
    color: 'red',
    paddingLeft: 0.05 * width,
    paddingRight: 0.05 * width,
    fontSize: 0.04 * width,
    paddingBottom: 0.05 * width,
    marginLeft: 0.04 * width,
    textAlign: 'center'
  },
  requirementsContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  requirementItem: {
    textAlign: 'center',
    fontSize: 0.04 * width,
    marginLeft: 0.04 * width,
  },
  noRequirementsText: {
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 10,
    color: 'gray',
  },
  location: {
    marginTop: 0.01 * width,
    color: '#ffffff',
    fontWeight: 'bold'
  }
});

export default SingleOrg;
