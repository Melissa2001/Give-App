import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./Screens/Splash";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import ForgotPass from "./Screens/ForgotPass";
import OTP from "./Screens/OTP";
import NewPass from "./Screens/NewPass";
import Success from "./Screens/Success";
import Home from "./Screens/Home";
import Sell from "../src/BottomNavigator/Sell";
import MedicalForm from "./Screens/SellForms/MedicalForm";
import ClothForm from "./Screens/SellForms/ClothForm";
import BookForm from "./Screens/SellForms/BookForm";
import RequirementsForm from "./Screens/SellForms/Requirements";
import OthersForm from "./Screens/SellForms/OthersForm";
import Details from "../Shared/Details";
import CategoriesMain from "../Shared/CategoriesMain";
import SingleOrg from "../Shared/Organization/SingleOrg";
import EditProfile from "./Screens/EditProfile";
import CreateOrg from "./Screens/createOrg";
import History from "./Screens/History";
import Contact from "./Screens/Contact";
import OrgSingleHome from "../Shared/OrgSingleHome";
import ChatScreen from "./Screens/ChatAndGratitude/ChatScreen";
import AddPostScreen from "./Screens/ChatAndGratitude/AddPostScreen";
import Chat from '../src/Screens/ChatAndGratitude/Chat'
import ChatGratitude from "./BottomNavigator/ChatGratitude";
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUp}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="ForgotPass"
          component={ForgotPass}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="OTP"
          component={OTP}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="NewPass"
          component={NewPass}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Success"
          component={Success}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Sell"
          component={Sell}
        />

        <Stack.Screen
          options={{ headerShown: true }}
          name="MedicalForm"
          component={MedicalForm}
        />

        <Stack.Screen
          options={{ headerShown: true }}
          name="ClothForm"
          component={ClothForm}
        />

        <Stack.Screen
          options={{ headerShown: true }}
          name="BookForm"
          component={BookForm}
        />

        <Stack.Screen
          options={{ headerShown: true, title: "Organization Requirements" }}
          name="RequirementsForm"
          component={RequirementsForm}
        />



        <Stack.Screen
          options={{ headerShown: true }}
          name="OthersForm"
          component={OthersForm}
        />

        <Stack.Screen
          options={{ headerShown: true }}
          name="Details"
          component={Details}
        />

        <Stack.Screen
          options={({ route }) => ({
            headerShown: true,
            title: route.params.category,
          })}
          name="CategoriesMain"
          component={CategoriesMain}
        />

        <Stack.Screen
          options={{ headerShown: true, title: "Details" }}
          name="SingleOrg"
          component={SingleOrg}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="CreateOrg"
          component={CreateOrg}
        />

        <Stack.Screen
          options={{ headerShown: true }}
          name="EditProfile"
          component={EditProfile}
        />

        <Stack.Screen
          options={{ headerShown: true }}
          name="History"
          component={History}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Contact"
          component={Contact}
        />

        <Stack.Screen
          options={{ headerShown: true, title: "Requirments" }}
          name="OrgSingleHome"
          component={OrgSingleHome}
        />

        <Stack.Screen
          options={({ route }) => ({
            headerShown: true,
            title: route.params.fullName,
          })}
          name="ChatScreen"
          component={ChatScreen}
        />

        <Stack.Screen
          options={{ headerShown: true }}
          name="AddPostScreen"
          component={AddPostScreen}
        />

<Stack.Screen
          options={{ headerShown: false }}
          name="ChatGratitude"
          component={ChatGratitude}
        />

         <Stack.Screen
          options={({ route }) => ({
            headerShown: true,
            title: 'Chat', // Set the desired title for the Chat screen
          })}
          name="Chat"
          component={Chat}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
