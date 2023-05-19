import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react';


import Search from '../../Shared/Search';
import Card from '../../Shared/Card';


const Main = () => {
    return (
      <View >
          <Search />
          <Card/>
          
      </View>
      );
    }
export default Main