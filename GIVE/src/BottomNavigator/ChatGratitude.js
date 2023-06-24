import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chat from "./Chat";
import Gratitude from "./Gratitude";
import TopBar from "../../Shared/Organization/TopBar";

const Tab = createMaterialTopTabNavigator();



const ChatGratitude=()=>{
    return (
        <>
            <TopBar></TopBar>
        <Tab.Navigator>
                <Tab.Screen name="Chat" component={Chat} />
                <Tab.Screen name="Gratitude" component={Gratitude} />
            </Tab.Navigator></>
      );
}

export default ChatGratitude