import { View, Text, TouchableOpacity, Image ,KeyboardAvoidingView} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import Main from '../BottomNavigator/Main';
//import Organization from '../BottomNavigator/Organization';
import OrganizationContainer from '../../Shared/Organization/OrganizationContainer';
import Sell from '../BottomNavigator/Sell';
import Chat from '../BottomNavigator/Chat';
import Profile from '../BottomNavigator/Profile';
import ChatGratitude from '../BottomNavigator/ChatGratitude';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={{ flex: 1 ,backgroundColor:'white'}}>
      {selectedTab === 0 ? (
        <Main />
      ) : selectedTab === 1 ? (
        <OrganizationContainer />
      ) : selectedTab === 2 ? (
        <Sell />
      ) : selectedTab === 3 ? (
        <ChatGratitude></ChatGratitude>
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
          borderRadius: 15
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
            style={{ width: 24, height: 24,tintColor:selectedTab==0?'#927FDB':'#8e8e8e' }}
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
            style={{ width: 24, height: 24,tintColor:selectedTab==1?'#927FDB':'#8e8e8e' }}
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
            style={{ width: 24, height: 24,tintColor:selectedTab==3?'#927FDB':'#8e8e8e' }}
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
            style={{ width: 24, height: 24,tintColor:selectedTab==4?'#927FDB':'#8e8e8e' }}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Home;
