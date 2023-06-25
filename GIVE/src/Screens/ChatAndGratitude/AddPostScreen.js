import React from 'react';
import {
  View,
  StyleSheet,
Text,
Image,
Pressable
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import CommonButton from '../../../Shared/Form/CommonButton';


import {
  InputField,
  InputWrapper,
} from '../ChatAndGratitude/AddPost'

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

const AddPostScreen = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <InputWrapper>
        
      <Pressable onPress={pickImageAsync}>
              <Image source={ImagePickerIcon} style={styles.icon} />
            </Pressable>
        <InputField
          placeholder="What's on your mind?"
          multiline
          numberOfLines={4}
          
        />
     
      </InputWrapper>

      <CommonButton title={'POST'} bgColor={'#9683dd'} onPress={() => {navigation.navigate('Gratitude')}} />
      
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