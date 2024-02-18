import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Button, Pressable } from 'react-native';
import StartButton from "../components/StartButton/StartButton";
import AboutButton from "../components/AboutButton/AboutButton";
import SettingsButton from "../components/SettingsButton/SettingsButton";
import FriendsButton from "../components/FriendsButton/FriendsButton";

export default function HomePage({navigation}) {
    handleTaskPage = async () => {
        navigation.navigate("TasksPage"); 
    };
    handleStatsPage = async () => {
        console.log("testttt");
        navigation.navigate("StatsPage"); 
    };
    handleFriendsPage = async () => {
        navigation.navigate("FriendsPage"); 
    };
    handleAboutPage = async () => {
        navigation.navigate("AboutPage"); 
    };
    return (
        <View style = {styles.background}>
            <ImageBackground 
                style = {styles.backgroundimage}
                source = {require("./images/HomeBackground.png")}
            >
                <View style={styles.yellowbackground}>
                <Text style={styles.text}>Halfway</Text>
                </View>

                {/* start button */}
                <TouchableOpacity style={styles.container} onPress={handleTaskPage}>
                    <Image
                        style={styles.image1}
                        source={require('../components/StartButton/StartImageButton.png')}
                    />
                </TouchableOpacity>

                <View style = {styles.group}> 
                    {/* Settings Tab */}
                    <TouchableOpacity style={styles.container} onPress={handleStatsPage}>
                        <Image 
                            source = {require('../components/SettingsButton/analytics.png')}
                            style= {styles.settingsbutton}
                        />
                    </TouchableOpacity>

                    {/* Friends Button */}
                    <TouchableOpacity style={styles.container} onPress={handleFriendsPage}>
                        <Image 
                            source = {require('../components/FriendsButton/friends.png')}
                            style= {styles.friendsButton}
                        />
                    </TouchableOpacity>

                    {/* About Button */}
                    <TouchableOpacity style={styles.container} onPress={handleAboutPage}>
                        <Image 
                            source = {require('../components/AboutButton/AboutButton(1).png')}
                            style= {styles.aboutbutton}
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>
        
    )
}


const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    settingsbutton: {
        left: '1%',
        top: '150%'
    },
    friendsButton: {
        alignSelf: 'center',
        top: '50%'
    },
    aboutbutton: {
        padding: 2,
        left: '70%',
        bottom: '50%'
    },
    image1: {
        justifyContent: 'center',
        left: '15%',
        top: '40%',
    },
    backgroundimage: {
        flex: 1, 
        justifyContent: 'center'
    },

    yellowbackground: {
        backgroundColor: "#FFF2DE",
        justifyContent: "center",
        top: '3%',
        height: '20%'
    },

    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 75, 
        letterSpacing: 9
    },

    group: {
        padding: 20,
    }

})