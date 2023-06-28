import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import SellForm from '../Shared/SellForm';

const UploadImage = ({ categoryName }) => {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  const ImagePickerIcon = require('../assets/ImageUploadIcon.png');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Add Details</Text>
      <Pressable onPress={pickImageAsync}>
        <Image source={ImagePickerIcon} style={styles.icon} />
      </Pressable>
      <Text style={styles.text}>Upload Image</Text>
      <SellForm categoryName={categoryName}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: 'center',
    paddingBottom: 50, 
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 17,
    color: 'grey',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default UploadImage;
