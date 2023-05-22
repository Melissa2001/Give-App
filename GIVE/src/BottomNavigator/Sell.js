import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
// import { useNavigation } from "@react-navigation/native";


import CategoriesCard from '../../Shared/CategoriesCard';

var { width } = Dimensions.get('window');
const Sell = () => {
  // const navigation=useNavigation();
    return (
      
        <View style={styles.container}>
          <Text style={styles.text}>What are you offering?</Text>
          <CategoriesCard/>
        </View>
      );
    };
    const styles = StyleSheet.create({
      container: {
        marginTop:100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text:{
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf:'flex-start',
        marginLeft:40,
      }
    });



export default Sell