import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const SettingsButton = (/*{ onPress }*/) => {
    return (
        <Pressable style={styles.container}>
            <Text style={styles.text}>settings</Text>
        </Pressable>
    );
}; 

const styles = StyleSheet.create({
   container: {
    backgroundColor: "#9290B4", 
    width: 180,
    height: 66,
    padding: 15,
    marginVertical: 5, 

    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 5, 
    top: '21%',
    left: '16%',
    borderRadius: 15,
   },

   text: {
    fontWeight: 'bold',
    color: '#110C48',
    fontSize: 23
   }


})
export default SettingsButton;