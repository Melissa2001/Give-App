import { View,ScrollView ,Dimensions} from 'react-native'
import React from 'react'



import Card from '../../Shared/card';
import Search from '../../Shared/Search';
import ProductContainer from '../../Shared/Products/ProductContainer'

var { width } = Dimensions.get('window');
const Organization = () => {
  
    return (
        
        <View>
          <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' ,width: width,marginTop: 50}}>
          <Search/>
          <Card style={{marginTop:50}}/>
        </ScrollView>
        <View>
          <ProductContainer/>
        </View>

        </View>
      );
    }
export default Organization