import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import CommonButton from '../../../Shared/Form/CommonButton';
import axios from 'axios';
import { UserContext } from '../../../contexts/userContexts';
import baseURL from '../../../assets/common/baseUrl';
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
  const userContext = useContext(UserContext);
  const [requirementContent, setRequirementContent] = useState('');

  let placeholderText = '';
  let showImageSelection = true;

  if (screenType === 'gratitude') {
    placeholderText = "What's on your mind?";
  } else if (screenType === 'requirements') {
    placeholderText = 'What are your requirements?';
    showImageSelection = false;
  }

  const handlePost = async () => {
    if (screenType === 'gratitude') {
      navigation.navigate('Gratitude');
    } else if (screenType === 'requirements') {
      try {
        // Fetch organization name based on organization ID from the backend
        const organizationResponse = await axios.get(`${baseURL}organizations/fetchOrganization/${userContext.userId}`);
        const organization = organizationResponse.data;

        // Send POST request to backend with organizationId, organizationName, and requirementContent
        const response = await axios.post(`${baseURL}requirements/`, {
          organizationId: userContext.userId,
          organizationName: organization.name,
          requirement: requirementContent,
        });

        if (response.status === 201) {
          alert('Requirement posted successfully');
        } else {
          alert('Error occurred while posting the requirement');
        }
      } catch (error) {
        alert('Error posting requirement:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <InputWrapper>
        {showImageSelection && (
          <Pressable onPress={pickImageAsync}>
            <Image source={ImagePickerIcon} style={styles.icon} />
          </Pressable>
        )}
        <InputField
          placeholder={placeholderText}
          multiline
          numberOfLines={4}
          value={requirementContent}
          onChangeText={setRequirementContent}
        />
      </InputWrapper>

      <CommonButton title={'POST'} textColor={'#ffffff'} bgColor={'#9683dd'} onPress={handlePost} />
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
