import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CommonButton from '../../Shared/Form/CommonButton';
import Login from '../Screens/Login';
import *  as SecureStore from 'expo-secure-store';
const Profile = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Clear the Email Id and Password fields when navigating back to the Profile screen
      clearFields();
    });

    return unsubscribe;
  }, [navigation]);

  const clearFields = () => {
    setEmail('');
    setPassword('');
  };

  const handlePress = () => {
    navigation.navigate('EditProfile');
    console.log('Button pressed!');
  };

  const handleHistoryPress = () => {
    navigation.navigate('History');
  };

  const handleContactUsPress = () => {
    navigation.navigate('Contact');
  };

  const handleLogoutPress = async () => {
    // Clear the Email Id and Password fields
    clearFields();

    // Clear the stored credentials
    await SecureStore.deleteItemAsync('email');
    await SecureStore.deleteItemAsync('password');

    console.log('Logout pressed!');
    // Redirect to the login screen
    navigation.navigate('Login');
  };

  const image = require('../../assets/profile.png');

  const data = [
    { id: '1', title: 'History', onPress: handleHistoryPress },
    { id: '2', title: 'Contact Us', onPress: handleContactUsPress },
    { id: '3', title: 'Log Out', onPress: handleLogoutPress },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.divider} onPress={item.onPress}>
      <Text style={styles.dividerText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.profileImage} />

      <CommonButton title={'Edit Profile'} textColor={'#9683dd'} onPress={handlePress} />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 150,
    width: 150,
    marginTop: 140,
  },
  flatList: {
    marginTop: 20,
    width: '90%',
  },
  divider: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  dividerText: {
    fontSize: 18,
    color: 'grey',
    fontWeight: 'bold',
  },
});

export default Profile;
