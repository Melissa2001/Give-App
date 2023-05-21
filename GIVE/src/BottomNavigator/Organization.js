import { View,ScrollView ,Dimensions} from 'react-native'
import React from 'react'
import Card from '../../Shared/card';

var { width } = Dimensions.get('window');
const Organization = () => {
  
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' ,width: width,marginTop: 50}}>
          <Card/>
        
        </ScrollView>
      );
    }
export default Organization