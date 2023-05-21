import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react'

import CategoriesCard from '../../Shared/CategoriesCard';

var { width } = Dimensions.get('window');
const Sell = () => {
    return (
        <View style={styles.container}>
          <CategoriesCard/>
        </View>
      );
    };
    const styles = StyleSheet.create({
      container: {
        marginTop:60,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });



export default Sell