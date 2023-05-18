import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import Main from '../BottomNavigator/Main';
import Organization from '../BottomNavigator/Organization';
import Sell from '../BottomNavigator/Sell';
import Chat from '../BottomNavigator/Chat';
import Profile from '../BottomNavigator/Profile';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {selectedTab === 0 ? (
        <Main />
      ) : selectedTab === 1 ? (
        <Organization />
      ) : selectedTab === 2 ? (
        <Sell />
      ) : selectedTab === 3 ? (
        <Chat />
      ) : selectedTab === 4 ? (
        <Profile />
      ) : null}

      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 40
        }}
      >
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Image
            source={require('../../assets/HomeIcon.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Image
            source={require('../../assets/OrganizationIcon.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(2);
          }}
        >
          <Image
            source={require('../../assets/SellIcon.png')}
            style={{ width: 44, height: 44 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(3);
          }}
        >
          <Image
            source={require('../../assets/ChatIcon.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(4);
          }}
        >
          <Image
            source={require('../../assets/ProfileIcon.png')}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
