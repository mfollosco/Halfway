import React from 'react';
import {View, Text, StyleSheet, Pressable, TouchableOpacity, Image} from 'react-native';

const SettingsButton = (/*{ onPress }*/) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image 
                source = {require('./analytics.png')}
                style= {styles.settingsbutton}
            />
        </TouchableOpacity>
    );
}; 

const styles = StyleSheet.create({
   settingsbutton: {
    left: '1%',
    top: '150%'
   }


})
export default SettingsButton;