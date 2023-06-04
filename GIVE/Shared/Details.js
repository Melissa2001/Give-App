import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CommonButton from './Form/CommonButton';

const Details = () => {
  const image = require('../assets/wheelchair.png');

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.heading}>Wheelchair</Text>
      <Text style={styles.description}>
        Despite its age, this wheelchair has been well-maintained and is in excellent condition.
        It features a sturdy and durable frame, ensuring a safe and comfortable ride. The wheelchair
        also includes padded armrests and a comfortable seat cushion for added comfort.
      </Text>
      <Text style={styles.heading}>Contact</Text>
      <Text style={styles.contactname}>Ria Anna James</Text>
      <View style={styles.buttonContainer}>
        <CommonButton
          onPress={() => {
            // Handle button press
          }}
          title="Message"
          bgColor="#4CAF50"
          textColor="#FFFFFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 40,
    alignSelf: 'center',
    borderRadius: 20,
  },
  heading: {
    marginTop: 40,
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#9683DD',
  },
  description: {
    marginTop: 20,
    alignSelf: 'center',
    margin: 40,
    marginBottom: -10,
    fontSize: 16,
    lineHeight: 24,
  },
  contactname: {
    margin: 40,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 125,
    right: 40,
  },
});

export default Details;
