import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import CommonButton from '../../../Shared/Form/CommonButton';

import { InputField, InputWrapper } from '../ChatAndGratitude/AddPost';

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

const ImagePickerIcon = require('../../../assets/ImageUploadIcon.png');

const AddPostScreen = ({ route }) => {
  const navigation = useNavigation();
  const { screenType } = route.params;

  let placeholderText = '';
  let showImageSelection = true;

  if (screenType === 'gratitude') {
    placeholderText = "What's on your mind?";
  } else if (screenType === 'requirements') {
    placeholderText = 'What are your requirements?';
    showImageSelection = false;
  }

  return (
    <View style={styles.container}>
      <InputWrapper>
        {showImageSelection && (
          <Pressable onPress={pickImageAsync}>
            <Image source={ImagePickerIcon} style={styles.icon} />
          </Pressable>
        )}
        <InputField placeholder={placeholderText} multiline numberOfLines={4} />
      </InputWrapper>

      <CommonButton
        title={'POST'}
        textColor={'#ffffff'}
        bgColor={'#9683dd'}
        onPress={() => {
          if (screenType === 'gratitude') {
            navigation.navigate('Gratitude');
          } else if (screenType === 'requirements') {
            // Perform specific action for requirements screen
          }
        }}
      />
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
