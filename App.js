import React, { useState } from "react"; 
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TasksPage from './app/screens/tasks' 
import AddTaskPage from "./app/screens/AddTask";
import FriendsPage from "./app/screens/Friends"
import InputLocation from "./src/InputLocation"
import AboutPage from "./app/screens/About"

const Stack = createNativeStackNavigator();

const App = () => { 
  return (
    // <TasksPage/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TasksPage">
        <Stack.Screen name="TasksPage" component={TasksPage} />
        <Stack.Screen name="AddTaskPage" component={AddTaskPage} />
        {/* <Stack.Screen name="FriendsPage" component={FriendsPage} />
        <Stack.Screen name="AboutPage" component={AboutPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}; 

export default App;
