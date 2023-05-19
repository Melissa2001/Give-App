import { View,ScrollView ,Dimensions} from 'react-native'
import React from 'react'
import card from '../../Shared/card';

var { width } = Dimensions.get('window');
const Main = () => {
  
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' ,width: width,marginTop: 50}}>
          <card/>
        
        </ScrollView>
      );
    }
export default Main