import React from 'react';
import { View, Text, StyleSheet, Button, Image, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../../../assets/data/messageStyles'


const { width } = Dimensions.get('window');

const Messages =
[
  {
    "id": "1f2e3d4c-5b6a-7c8d-9e0f-1a2b3c4d5e6f",
    "fullName": "Karun",
    "timeStamp": "12:47 PM",
    "recentText": "Good Day!",
    "avatarUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    "id": "2f3e4d5c-6b7a-8c9d-0e1f-2a3b4c5d6e7f",
    "fullName": "Gautham",
    "timeStamp": "11:11 PM",
    "recentText": "Cheer up, there!",
    "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  },
  {
    "id": "3f4e5d6c-7b8a-9c0d-1e2f-3a4b5c6d7e8f",
    "fullName": "Melissa",
    "timeStamp": "6:22 PM",
    "recentText": "Good Day!",
    "avatarUrl": "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  },
  {
    "id": "4f5e6d7c-8b9a-0c1d-2e3f-4a5b6c7d8e9f",
    "fullName": "Dona",
    "timeStamp": "8:56 PM",
    "recentText": "All the best",
    "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  },
  {
    "id": "5f6e7d8c-9b0a-1c2d-3e4f-5a6b7c8d9e0f",
    "fullName": "New User",
    "timeStamp": "12:47 PM",
    "recentText": "I will call today.",
    "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  },
  {
    "id": "6f7e8d9c-0b1a-2c3d-4e5f-6a7b8c9d0e1f",
    "fullName": "Caritas India",
    "timeStamp": "12:47 PM",
    "recentText": "Thank you for your support in helping those in need!",
    "avatarUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    "id": "7f8e9d0c-1b2a-3c4d-5e6f-7a8b9c0d1e2f",
    "fullName": "Mother Teresa Charitable Trust",
    "timeStamp": "11:11 PM",
    "recentText": "Your kindness brings hope and love to many lives!",
    "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  },
  {
    "id": "8f9e0d1c-2b3a-4c5d-6e7f-8a9b0c1d2e3f",
    "fullName": "St. Vincent De Paul Society",
    "timeStamp": "6:22 PM",
    "recentText": "Together, we can make a difference in the lives of the less fortunate!",
    "avatarUrl": "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  },
  {
    "id": "9f0e1d2c-3b4a-5c6d-7e8f-9a0b1c2d3e4f",
    "fullName": "Little Flower Charitable Society",
    "timeStamp": "8:56 PM",
    "recentText": "Thank you for your support in spreading love and care!",
    "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  },
  {
    "id": "0f1e2d3c-4b5a-6c7d-8e9f-0a1b2c3d4e5f",
    "fullName": "Sneha Bhavan",
    "timeStamp": "12:47 PM",
    "recentText": "Your contribution helps us make a positive impact on society!",
    "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  },
  {
    "id": "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
    "fullName": "Navajeevan Trust",
    "timeStamp": "12:47 PM",
    "recentText": "Together, we can create a better future for the underprivileged!",
    "avatarUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    "id": "2a3b4c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d",
    "fullName": "Mar Gregorios Charitable Society",
    "timeStamp": "11:11 PM",
    "recentText": "Your generosity brings light to the lives of those in need!",
    "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  },
  {
    "id": "3b4c5d6e-7f8a-9b0c-1d2e-3f4a5b6c7d8e",
    "fullName": "Snehadhara Foundation",
    "timeStamp": "6:22 PM",
    "recentText": "Thank you for supporting our mission to empower the marginalized!",
    "avatarUrl": "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  },
  {
    "id": "4c5d6e7f-8a9b-0c1d-2e3f-4a5b6c7d8e9f",
    "fullName": "Karunakara Guru Sadhu Jana Seva Sangham",
    "timeStamp": "8:56 PM",
    "recentText": "Your compassion brings hope to those who need it most!",
    "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  },
  {
    "id": "5d6e7f8a-9b0c-1d2e-3f4a-5b6c7d8e9f0a",
    "fullName": "Holy Family Charitable Society",
    "timeStamp": "12:47 PM",
    "recentText": "Your kindness makes a positive impact in the lives of many!",
    "avatarUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  },
  {
    "id": "6e7f8a9b-0c1d-2e3f-4a5b-6c7d8e9f0a1b",
    "fullName": "Maryasadanam",
    "timeStamp": "12:47 PM",
    "recentText": "Thank you for your support in bringing joy to those in need!",
    "avatarUrl": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
  ]
  

const Chat = () => {
  const navigation = useNavigation();
   
  return (
    <View style={styles.container}>
      
      <Container>
      <FlatList
      data={Messages}
      keyExtractor={item=>item.id}
      renderItem={({item})=>(
        <Card onPress={()=>navigation.navigate('ChatScreen',{fullName:item.fullName})}>
          <UserInfo>
            <UserImgWrapper>
              <Image source={{ uri: item.avatarUrl }} style={styles.userImg} />
            </UserImgWrapper>
            <TextSection>
              <UserInfoText>
                <UserName>{item.fullName}</UserName>
                <PostTime>{item.timeStamp}</PostTime>
              </UserInfoText>
              <MessageText>{item.recentText}</MessageText>

            </TextSection>
          </UserInfo>
        </Card>
      )
    }
    />
    </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    userImg: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
  });


export default Chat;
