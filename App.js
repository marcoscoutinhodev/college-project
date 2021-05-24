import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./src/screen/Login";
import SignUp from "./src/screen/SignUp";
import SignUpInformation from "./src/screen/SignUpInformation";
import TermAndCondition from "./src/screen/TermAndCondition";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle:{
            backgroundColor: "#FFF",
          }
        }}
      >
        <Stack.Screen name="Login" component={ Login } />
        <Stack.Screen name="SignUp" component={ SignUp } />
        <Stack.Screen name="SignUpInformation" component={ SignUpInformation } />
        <Stack.Screen name="TermAndCondition" component={ TermAndCondition } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}