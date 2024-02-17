import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import Chat from './src';
import GetLocation from 'react-native-get-location';
import * as Location from 'expo-location';

const App = () => {
  const [members, setMembers] = useState([]);
  const [location, setLocation] = useState();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // Update the URL to point to your Flask backend
        const response = await axios.get('http://localhost:5001/members');
        setMembers(response.data.members);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };
    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Please grant location permission');
          return;
        }
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        console.log('Location:', currentLocation);
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };
    getLocation();
    fetchMembers();
  }, []);

  GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
    })
    .then(location => {
        console.log(location);
    })
    .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    });


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Members:</Text>
      <View>
        <Chat />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;
