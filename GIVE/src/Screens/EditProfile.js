import React from 'react';
import { View, TextInput, Dimensions, Image } from 'react-native';
import UploadImage from '../../Shared/UploadImage';
import CommonButton from '../../Shared/Form/CommonButton';

const EditProfile = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <UploadImage includeSellForm={false} />
      <View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Melissa Manoj" />
          <Image source={require('../../assets/edit.png')} style={styles.editIcon} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Melissa@gmail.com" />
          <Image source={require('../../assets/edit.png')} style={styles.editIcon} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="123456789" />
          <Image source={require('../../assets/edit.png')} style={styles.editIcon} />
        </View>
        <TextInput style={styles.input} placeholder="New Password" />
        <TextInput style={styles.input} placeholder="Confirm Password" />
      </View>
      <View>
        <CommonButton
          title={'Submit'}
          bgColor={'#9683dd'}
          textColor={'#ffffff'}
          onPress={() => {
            console.log('Form submitted');
          }}
        />
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Dimensions.get('window').height;
const styles = {
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    margin:15,
    width: deviceWidth - 90,
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  editIcon: {
    position: 'absolute',
    right: 50,
    width: 20,
    height: 20,
  },
};

export default EditProfile;
