import { StatusBar } from "expo-status-bar";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { StyleSheet, Text, View } from 'react-native';
import DetectObject from "./src/mindex";
import Kamera from "./camera";
import { StackedBarChart } from "react-native-chart-kit";

const Stack = createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Kamera">
        <Stack.Screen name="DetectObject" component={DetectObject} />
        <Stack.Screen name="Kamera" component={Kamera} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Kamera/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
