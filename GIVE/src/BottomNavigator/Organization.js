import {View ,Dimensions} from 'react-native'
import React from 'react'
import OrganizationContainer from '../../Shared/Organization/OrganizationContainer';


var { width } = Dimensions.get('window');
const Organization = (props) => {
  
    return (
        
        <View style={{ alignItems: 'center', justifyContent: 'center' ,width: width,marginTop: 100,marginBottom:70}}><OrganizationContainer/></View>
          
        
        //</ScrollView>
      );
    }
export default Organization