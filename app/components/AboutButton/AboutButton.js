import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const AboutButton = ({ /*onPress*/ }) => {
    return (
        <Pressable style={styles.container}>
            <Text style={styles.text}>us </Text>
        </Pressable>
    );
}; 

const styles = StyleSheet.create({
   container: {
    backgroundColor: "#9290B4", 
    width: 80,
    height: 66,
    marginVertical: 5, 
    padding: 1,

    alignItems: 'center', 
    justifyContent: 'center',
    top: '11.3%',
    left: '65%',
    borderRadius: 15
   },

   text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#110C48',
    position: 'absolute'
   }


})
export default AboutButton;