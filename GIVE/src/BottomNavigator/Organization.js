import { View,ScrollView ,Dimensions} from 'react-native'
import React from 'react'
import Card from '../../Shared/Card';

var { width } = Dimensions.get('window');
const Main = () => {
  
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' ,width: width,marginTop: 50}}>
          <Card/>
        
        </ScrollView>
      );
    }

export default Main