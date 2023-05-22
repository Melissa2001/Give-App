import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import UploadImage from '../../../Shared/UploadImage';

const MedicalForm = () => {
  return (
    <View >
      <UploadImage/>
      <Text style={styles.text}>Volunteering</Text>
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
export default MedicalForm;
