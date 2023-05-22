import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./Screens/Splash";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import ForgotPass from "./Screens/ForgotPass";
import OTP from "./Screens/OTP";
import NewPass from "./Screens/NewPass";
import Success from "./Screens/Success";
import Home from "./Screens/Home";
import Sell from '../src/BottomNavigator/Sell'
import MedicalForm from './Screens/SellForms/MedicalForm';
import ClothForm from './Screens/SellForms/ClothForm';
import BookForm from './Screens/SellForms/BookForm';
import VolunteeringForm from './Screens/SellForms/VolunteeringForm';
import OthersForm from './Screens/SellForms/OthersForm';





const Stack = createNativeStackNavigator();

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
          options={{ headerShown: false }}
          name="MedicalForm"
          component={MedicalForm}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="ClothForm"
          component={ClothForm}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="BookForm"
          component={BookForm}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="VolunteeringForm"
          component={VolunteeringForm}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="OthersForm"
          component={OthersForm}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
