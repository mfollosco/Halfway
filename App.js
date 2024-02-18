import React, { useState } from "react"; 
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ChatbotApp from './chatbot.js';
import axios from "axios";

import TasksPage from './app/screens/tasks' 
import AddTaskPage from "./app/screens/AddTask";
import FriendsPage from "./app/screens/Friends"
import InputLocation from "./src/InputLocation"
import AboutPage from "./app/screens/About"
import GeneralAnalyticsPage from "./app/screens/GeneralAnalytics"
import LocationTaskPage from './app/screens/LocationTask'
import HomePage from './app/screens/HomePage'
import StatsPage from './app/screens/StatsPage'

const Stack = createNativeStackNavigator();

const App = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="StatsPage" component={StatsPage} />
        <Stack.Screen name="TasksPage" component={TasksPage} />
        <Stack.Screen name="AddTaskPage" component={AddTaskPage} />
        <Stack.Screen name="FriendsPage" component={FriendsPage} />
        <Stack.Screen name="AboutPage" component={AboutPage} />
        <Stack.Screen name="GeneralAnalyticsPage" component={GeneralAnalyticsPage} />
        <Stack.Screen name="LocationTaskPage" component={LocationTaskPage} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}; 

export default App;
