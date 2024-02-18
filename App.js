import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from 'react-native';
import DetectObject from "./src/mindex";
import Kamera from "./camera";

export default function App(){
  return(
    <View style={styles.container}>
      <Kamera/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
