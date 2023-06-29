import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import SellForm from '../Shared/SellForm';

const UploadImage = ({ categoryName }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    } else {
      alert('You did not select any image.');
    }
  };

  const handleFormSubmit = () => {
    if (selectedImage) {
      // Here you can implement the logic to store the selectedImage in the database
      console.log('Selected image:', selectedImage);
      // Reset the selectedImage state after storing it in the database
      setSelectedImage(null);
    } else {
      alert('Please select an image before submitting.');
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
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
      )}
      <SellForm categoryName={categoryName} onSubmit={handleFormSubmit} />
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
  selectedImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default UploadImage;
