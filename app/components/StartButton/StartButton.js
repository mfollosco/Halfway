import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

const StartButton = ({ /*onPress*/ }) => {
    return (
        <Pressable style={styles.container}>
            <Image
                style={styles.image1}
                source={require('./StartImageButton.png')}
            />
            <Text style={styles.text}>Start</Text>
        </Pressable>
    );
}; 

const styles = StyleSheet.create({
   container: {
    backgroundColor: '#9290B4', 
    width: 283,
    height: 225,

    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 5, 
    top: '20%',
    borderRadius: 30,
    left: '15%'
   },

   image1: {
    maxWidth: '100%',
    height: 'auto'
   },

   text: {
    fontWeight: 'bold',
    color: '#110C48',
    fontSize: 40,
    top: '30%'
   }


})
export default StartButton;