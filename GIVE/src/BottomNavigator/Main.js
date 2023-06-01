import React from 'react';
import { View, Dimensions, Image, ScrollView } from 'react-native';
import { NativeBaseProvider, HStack, Center } from 'native-base';

import Card from '../../Shared/Card';
import Search from '../../Shared/Search';
import ProductContainer from '../../Shared/ProductContainer';

const { width } = Dimensions.get('window');

const Main = () => {
  const MedicalImage = require('../../assets/medicalIcon.png');
  const ClothImage = require('../../assets/clothIcon.png');
  const BookImage = require('../../assets/booksIcon.png');
  const VolunImage = require('../../assets/volunteeringIcon.png');
  const OtherImage = require('../../assets/othersIcon.png');

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
              <Center h="20" w="20" bg="#E2B9B0" rounded="full" shadow={3}>
                <Image source={MedicalImage} style={{ width: 18, height: 18 }} />
              </Center>
              <Center h="20" w="20" bg="#F4D8A5" rounded="full" shadow={3}>
                <Image source={ClothImage} style={{ width: 18, height: 18 }} />
              </Center>
              <Center h="20" w="20" bg="#DBC9B7" rounded="full" shadow={3}>
                <Image source={BookImage} style={{ width: 18, height: 18 }} />
              </Center>
              <Center h="20" w="20" bg="#55C7A6" rounded="full" shadow={3}>
                <Image source={VolunImage} style={{ width: 18, height: 18 }} />
              </Center>
              <Center h="20" w="20" bg="#A9C6D7" rounded="full" shadow={3}>
                <Image source={OtherImage} style={{ width: 18, height: 18 }} />
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
};

export default Main;
