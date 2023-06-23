import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native';

const data = require('../../assets/data/products.json');
import OrganizationList from './OrganizationList';
import TopBar from './TopBar';

const OrganizationContainer = (props) => {
  const [org, setOrg] = useState([]);

  useEffect(() => {
    setOrg(data);
    return () => {
      setOrg([]);
    };
  }, []);

  return (
    <View>
      <TopBar />
      <FlatList
        data={org}
        renderItem={({ item }) => (
          <OrganizationList navigation={props.navigation} key={item.id} item={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default OrganizationContainer;
