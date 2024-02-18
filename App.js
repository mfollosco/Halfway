import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from 'react-native';
import DetectObject from "./src/mindex";

export default function App(){
  return(
    <View style={styles.container}>
      <DetectObject/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
