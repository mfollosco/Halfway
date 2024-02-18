import React from "react";
import { ImageBackground, TouchableOpacity, StyleSheet, Text, View, Image, SafeAreaView, Button, Pressable } from 'react-native';
import BackButton from "../components/BackButton/BackButton";

export default function StatsPage() {
    return (
        <View style = {styles.background}>
            <ImageBackground 
                style = {styles.backgroundimage}
                resizeMethod="cover"
                source = {require("./images/StatsPage.png")}
            >
                <View>
                    <BackButton />
                </View>

                <View style={styles.statsbackground}>

                </View>
                
            </ImageBackground>

        </View>
        
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },

    backgroundimage: {
        flex: 1, 
    },

    text: {
        alignSelf: 'center',
        fontSize: 60,
        fontWeight: 'bold',
        bottom: '40%',
        left: '5%'
    },

    statsbackground: {
        backgroundColor: "#E2D7C6",
        width: 399, 
        height: 387,
    }

})