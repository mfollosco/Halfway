import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ChatbotApp from './chatbot.js';
import axios from "axios";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Other components or views can be added here */}
      <ChatbotApp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
