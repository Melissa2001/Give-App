<<<<<<< HEAD
import { View,ScrollView ,Dimensions} from 'react-native'
import React from 'react'
import Card from '../../Shared/Card';
=======
import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react';


import Search from '../../Shared/Search';
import Card from '../../Shared/Card';

>>>>>>> 9372a4511a87bc7ec7fa9fa1b65dfaf3fb5e069c

var { width } = Dimensions.get('window');
const Main = () => {
  
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' ,width: width,marginTop: 50}}>
          <Card/>
        
        </ScrollView>
      );
    }
export default Main