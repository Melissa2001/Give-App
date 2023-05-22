import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const VolunteeringForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>VolunteeringForm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default VolunteeringForm;
