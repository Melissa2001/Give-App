import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native';
import axios from 'axios';
import baseURL from '../../assets/common/baseUrl';
import OrganizationList from './OrganizationList';
import TopBar from './TopBar';

const OrganizationContainer = (props) => {
  const [org, setOrg] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const fetchOrganizations = async () => {
    try {
      const response = await axios.get(`${baseURL}organizations`);
      if (response.status === 200) {
        setOrg(response.data);
      }
    } catch (error) {
      console.error('Error fetching organizations:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9683dd" />
      </View>
    );
  }

  return (
    <View>
      <TopBar />
      <FlatList
        data={org}
        renderItem={({ item }) => (
          <OrganizationList navigation={props.navigation} item={item} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OrganizationContainer;
