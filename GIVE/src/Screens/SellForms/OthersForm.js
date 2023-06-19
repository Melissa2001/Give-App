import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import UploadImage from '../../../Shared/UploadImage';

const OthersForm = ({ route }) => {
  const { categoryName } = route.params;

  return (
    <View>
       <UploadImage includeSellForm={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop:20,
    marginLeft:30,
    color:'grey',
    fontSize: 18,
    fontStyle:'italic',

  },
});
export default OthersForm;
