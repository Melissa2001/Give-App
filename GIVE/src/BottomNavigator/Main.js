import React, { useState } from 'react';
import { View, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NativeBaseProvider, HStack, Center, Text } from 'native-base';
import { useNavigation } from "@react-navigation/native";

import Card from '../../Shared/Card';
import Search from '../../Shared/Search';
import ProductContainer from '../../Shared/ProductContainer';
import TopBar from '../../Shared/Organization/TopBar';

const { width } = Dimensions.get('window');

const Main = () => {
  const navigation = useNavigation();

  const MedicalImage = require('../../assets/medicalIcon.png');
  const ClothImage = require('../../assets/clothIcon.png');
  const BookImage = require('../../assets/booksIcon.png');
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
        <TopBar />
        <ScrollView contentContainerStyle={{ flexGrow: 1,backgroundColor: '#fff' }}>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Search />
            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <Card></Card>
            </View>

            <HStack space={5} justifyContent="center" style={{ marginTop: 20, marginBottom: 20 }}>
              <Center>
                {renderCircle(MedicalImage, 'Medical Appliances')}
              </Center>
              <Center>
                {renderCircle(ClothImage, 'Cloths')}
              </Center>
              <Center>
                {renderCircle(BookImage, 'Books')}
              </Center>
              <Center>
                {renderCircle(OtherImage, 'Others')}
              </Center>
            </HStack>
            <Text style={styles.circleText}>Suggested Products</Text>
            <ProductContainer/>
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
  circleText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 10,
    color: 'grey',
    marginBottom: 20,
  },
};

export default Main;
