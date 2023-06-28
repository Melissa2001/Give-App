import React, { useState } from 'react';
import { View, Text, Pressable, HStack, Badge, Spacer, ScrollView } from 'native-base';
import CommonButton from '../../../Shared/Form/CommonButton';
import AddPostScreen from '../ChatAndGratitude/AddPostScreen';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const handlePress = () => {
  console.log('Button pressed!');
};

const History = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ marginRight: 10, alignSelf: 'flex-end' }}>
        <FontAwesome5.Button
          name="plus"
          size={22}
          backgroundColor="#fff"
          color="#9683dd"
          onPress={() => navigation.navigate('AddPostScreen', { screenType: 'requirements' })}
        />
      </View>

      <View style={{ marginTop: 40 }}>
        <HistoryCard />
      </View>
      <View style={{ marginTop: 40 }}>
        <HistoryCard />
      </View>
      <View style={{ marginTop: 40 }}>
        <HistoryCard />
      </View>
      <View style={{ marginTop: 40, marginBottom: 40 }}>
        <HistoryCard />
      </View>
    </ScrollView>
  );
};

function HistoryCard() {
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
                1 requirement
              </Badge>
              <Spacer />
              <Text fontSize={10} color="coolGray.800">
                Posted on 28/06/2023
              </Text>
            </HStack>
            <Text color="coolGray.800" mt={3} fontWeight="medium" fontSize="xl">
              Maryasadanm
            </Text>
            <Text mt={2} fontSize="sm" color="coolGray.700">
              Unlock powerful time-saving tools for creating email delivery and collecting marketing data
            </Text>
            <CommonButton title={'Message'} textColor={'#4caf50'} onPress={handlePress} />
          </View>
        )}
      </Pressable>
    </View>
  );
}

export default History;
