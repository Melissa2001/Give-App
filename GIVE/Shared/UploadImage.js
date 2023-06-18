import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import SellForm from '../Shared/SellForm';

const UploadImage = ({ includeSellForm }) => {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  const ImagePickerIcon = require('../assets/ImageUploadIcon.png');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Details</Text>
      <Pressable onPress={pickImageAsync}>
        <Image source={ImagePickerIcon} style={styles.icon} />
      </Pressable>
      <Text style={styles.text}>Upload Image</Text>
      {includeSellForm && <SellForm />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    alignItems: 'center',
  },
  icon: {
    
    width: 100,
    height: 100,
    // marginRight: 8,
    marginBottom: 20,
  },
  text: {
    fontSize: 17,
    color: 'grey',
  },
  title: {
  //  alignSelf:'center',
    fontSize: 23,
    fontWeight: 'bold',
    // alignSelf: 'flex-start',
    // marginLeft: 30,
    marginBottom: 20,
  },
});

export default UploadImage;
