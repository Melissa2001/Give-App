import React, { useState } from 'react';
import { View, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, HStack, Center, Text } from 'native-base';
import { useNavigation } from "@react-navigation/native";


import Card from '../../Shared/Card';
import Search from '../../Shared/Search';
import ProductContainer from '../../Shared/ProductContainer';
import CategoriesMain from '../../Shared/CategoriesMain';

const { width } = Dimensions.get('window');

const Main = () => {
  const navigation = useNavigation();

  const MedicalImage = require('../../assets/medicalIcon.png');
  const ClothImage = require('../../assets/clothIcon.png');
  const BookImage = require('../../assets/booksIcon.png');
  const VolunImage = require('../../assets/volunteeringIcon.png');
  const OtherImage = require('../../assets/othersIcon.png');


  
  const handleCirclePress = (category) => {
    navigation.navigate('CategoriesMain', { category });
    console.log('Categories pressed:', category);   
  };

  const renderCircle = (image, label) => {
    return (
      <TouchableOpacity onPress={() => handleCirclePress(label)}>
        <View>
          <Center h="20" w="20" bg="#E2B9B0" rounded="full" shadow={3}>
            <Image source={image} style={{ width: 40, height: 40 }} />
          </Center>
          <Text style={styles.circleText}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.topBar} />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Search />
            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <Card />
            </View>

            <HStack space={3} justifyContent="center" style={{ marginTop: 20, marginBottom: 20 }}>
              <Center>
                {renderCircle(MedicalImage, 'Medical')}
              </Center>
              <Center>
                {renderCircle(ClothImage, 'Cloth')}
              </Center>
              <Center>
                {renderCircle(BookImage, 'Books')}
              </Center>
              <Center>
                {renderCircle(VolunImage, 'Volunteer')}
              </Center>
              <Center>
                {renderCircle(OtherImage, 'Others')}
              </Center>
            </HStack>
            <ProductContainer />
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  topBar: {
    height: 100,
    backgroundColor: '#ffffff',
  },
  circleText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 10,
    color: 'grey',
    marginBottom: 20,
  },
};

export default Main;
