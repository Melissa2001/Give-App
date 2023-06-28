import React from 'react';
import { View, StyleSheet } from 'react-native';
import UploadImage from '../../../Shared/UploadImage';
const BookForm = ({ route }) => {
  const { categoryName } = route.params;

  return (
    <View>
      
      <UploadImage categoryName={categoryName} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    marginLeft: 30,
    color: 'grey',
    fontSize: 18,
    fontStyle: 'italic',
  },
});

export default BookForm;
