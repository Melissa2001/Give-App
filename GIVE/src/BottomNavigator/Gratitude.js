import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import PostCard from '../Screens/ChatAndGratitude/PostCard';
import { Container } from '../../assets/data/FeedStyles';
import { useNavigation } from "@react-navigation/native";

const Posts = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../../assets/users/user-3.jpg'),
    postTime: '4 mins ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../../assets/posts/post-img-3.jpg'),
    liked: true,
    likes: '14',
    comments: '5',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../assets/users/user-1.jpg'),
    postTime: '2 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '8',
    comments: '0',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../assets/users/user-4.jpg'),
    postTime: '1 hours ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../../assets/posts/post-img-2.jpg'),
    liked: true,
    likes: '1',
    comments: '0',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../assets/users/user-6.jpg'),
    postTime: '1 day ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../../assets/posts/post-img-4.jpg'),
    liked: true,
    likes: '22',
    comments: '4',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../assets/users/user-7.jpg'),
    postTime: '2 days ago',
    post:
      'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '0',
    comments: '0',
  },
];

const Gratitude = () => {
  const report=require('../../assets/report.png')
  const navigation = useNavigation();

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ marginRight: 10, alignSelf: 'flex-end' }}>
        <FontAwesome5.Button
          name="plus"
          size={22}
          backgroundColor="#fff"
          color="#9683dd"
          onPress={() => navigation.navigate('AddPostScreen', { screenType: 'gratitude' })}
        />
      </View>

      <Container>
        <FlatList
          data={Posts}
          renderItem={({ item }) => (
            <PostCard
              item={item}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </ScrollView>
  )
};

export default Gratitude;