import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopBar from '../../Shared/Organization/TopBar';

const Contact = () => {
  return (
    <View>
      <TopBar />
      <View style={styles.container}>
        <Text style={styles.name}>Melissa Manoj Thondoli</Text>
        <Text style={styles.email}>melissamanojthondoli2024@cs.sjcetpalai.ac.in</Text>
        <Text style={styles.name}>Dona Siby</Text>
        <Text style={styles.email}>donasiby2024@cs.sjcetpalai.ac.in</Text>
        <Text style={styles.name}>Karun Chery James</Text>
        <Text style={styles.email}>karuncheryjames2024@cs.sjcetpalai.ac.in</Text>
        <Text style={styles.name}>Gautham Babu</Text>
        <Text style={styles.email}>gauthambabu2024@cs.sjcetpalai.ac.in</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 40,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
});

export default Contact;
