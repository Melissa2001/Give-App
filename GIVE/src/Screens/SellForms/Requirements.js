import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, HStack, Badge, Spacer, ScrollView } from 'native-base';
import CommonButton from '../../../Shared/Form/CommonButton';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import baseURL from '../../../assets/common/baseUrl';

const Requirement = () => {
  const navigation = useNavigation();
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      const response = await axios.get(`${baseURL}requirements`);
      if (response.status === 200) {
        setRequirements(response.data);
      }
    } catch (error) {
      console.error('Error fetching requirements:', error);
    }
  };

  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <View style={{ marginRight: 10, alignSelf: 'flex-end' }}>
        <FontAwesome5.Button
          name="plus"
          size={22}
          backgroundColor="#fff"
          color="#9683dd"
          onPress={() => navigation.navigate('AddPostScreen', { screenType: 'requirements' })}
        />
      </View>

      {requirements.map((requirement, index) => (
        <View key={index} style={{ marginTop: 40 }}>
          <RequirementCard requirement={requirement} handlePress={handlePress} />
        </View>
      ))}
    </ScrollView>
  );
};

function RequirementCard({ requirement, handlePress }) {
  return (
    <View alignItems="center">
      <Pressable maxW={96}>
        {({ isHovered, isFocused, isPressed }) => (
          <View
            bg={isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'coolGray.100'}
            style={{ transform: [{ scale: isPressed ? 0.96 : 1 }] }}
            p={5}
            rounded={8}
            shadow={3}
            borderWidth={1}
            borderColor="coolGray.300"
          >
            <HStack alignItems="center">
              <Badge colorScheme="purple" _text={{ color: 'white' }} variant="solid" rounded={4}>
                {requirement.requirementCount} requirement
              </Badge>
              <Spacer />
              <Text fontSize={10} color="coolGray.800">
                Posted on {requirement.postedDate}
              </Text>
            </HStack>
            <Text color="coolGray.800" mt={3} fontWeight="medium" fontSize="xl">
              {requirement.organizationName}
            </Text>
            <Text mt={2} fontSize="sm" color="coolGray.700">
              {requirement.requirement}
            </Text>
            <CommonButton title={'Message'} textColor={'#4caf50'} onPress={handlePress} />
          </View>
        )}
      </Pressable>
    </View>
  );
}

export default Requirement;
