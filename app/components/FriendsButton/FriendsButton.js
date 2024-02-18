import React from 'react';
import {View, Text, StyleSheet, Pressable, TouchableOpacity, Image} from 'react-native';

const FriendsButton = (/*{ onPress }*/) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image 
                source = {require('./friends.png')}
                style= {styles.settingsbutton}
            />
        </TouchableOpacity>
    );
}; 

const styles = StyleSheet.create({
   settingsbutton: {
    alignSelf: 'center',
    top: '50%'
   }


})
export default FriendsButton;