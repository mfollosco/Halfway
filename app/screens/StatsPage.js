import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView, ImageBackground, ScrollView, TouchableOpacity, StyleSheet, Text, View, Image, SafeAreaView, Button, Pressable, Keyboard, TextInput } from 'react-native';
import BackButton from "../components/BackButton/BackButton";
import Entry from "../components/Entry/Entry";

export default function StatsPage({navigation}) {

    const [entry, setEntry] = useState();
    const [entryItems, setEntryItems] = useState([]);

    const handleAddEntry = () => {
        Keyboard.dismiss();
        setEntryItems([...entryItems, entry])
        setEntry(null)
    }
    
    handleBackBtn = async () => {
        navigation.navigate("GeneralAnalyticsPage"); 
    };

    return (
        <View style = {styles.background}>
            
            <ImageBackground 
                style = {styles.backgroundimage}
                source = {require("./images/StatsPage.png")}
            >
                <ScrollView style = {styles.scrollView}>
         
                <View style = {styles.topgroup}>
                    <TouchableOpacity style={styles.container} onPress={handleBackBtn}>
                        <Image 
                            source = {require('../components/BackButton/BackButton.png')}
                            style= {styles.backbutton}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text}>Stats</Text>
                </View>

                <View style={styles.statsbackground}>
                    <TouchableOpacity style={styles.dropdown}>
                        <Image 
                            source = {require('./images/SetSpotButton.png')}
                            style= {styles.dropdownbutton}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.TimeFrame}>
                        <Image 
                            source = {require('./images/TimeFrameButton.png')}
                            style= {styles.TimeFrameButton}
                        />
                    </TouchableOpacity>
                    <Image 
                    style={styles.graph}
                    source={require('./images/graph.png')}
                />
                <TouchableOpacity style={styles.SetGoal}>
                    <Image 
                        source = {require('./images/SetGoalButton.png')}
                        style= {styles.SetGoalButton}
                    />
                </TouchableOpacity>

                </View>
               
                <View style={styles.entriesWrapper}>
                    <View 
                        style={styles.writeEntryWrapper}
                    >
                        <TouchableOpacity onPress = {() => handleAddEntry()}>
                            <View style={styles.addButton}>
                                <Text style={styles.addText}>+</Text>
                            </View>
                        </TouchableOpacity>
                        <TextInput 
                            style={styles.input} 
                            placeholder={"Write an entry"} 
                            value={entry} 
                            onChangeText={text => setEntry(text)}
                        />

                        
                    </View>
                    <View style={styles.entries}>
                        {
                        entryItems.map((item, index) => {
                            return <Entry key={index} text={item} />
                        })
                        }
                    </View> 
                    </View> 
                </ScrollView>
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
        justifyContent: 'center'
    },
    
    topgroup: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginBottom: '10%'
    },

    dropdownbutton: {
        alignSelf: 'center',
        top: '30%'
    },

    TimeFrameButton: {
        alignSelf: 'center',
        top: '70%'
    },
    graph: {
        alignSelf: 'center',
        top: '10%',

    },

    text: {
        alignSelf: 'center',
        fontSize: 60,
        fontWeight: 'bold',
        marginTop: '5%'
    },

    statsbackground: {
        backgroundColor: "#E2D7C6",
        width: 399, 
        height: 400,
        marginBottom: 70,
    },

    SetGoal: {
        top: '15%',
        left: '66%',
    },

    scrollView: {
        flexGrow: 1
    },

    entriesWrapper: {
        paddingTop: 3,
        paddingHorizontal: 20,
        paddingBottom: 30
    },

    entries: {
        zIndex: 1,
    },

    writeEntryWrapper: {
        width: '100%',
        height: 50,
        marginBottom: '15%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        zIndex: 2
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#9290B4',
        borderColor: '#110C48',
        borderRadius: 60,
        borderWidth: 1,
        width: 250,
        color: '#110C48',
    },

    addButton: {
        width: 50,
        height: 50,
        backgroundColor: '#9290B4',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#110C48',
        borderWidth: 1,
    }, 

    backbutton: {
        width: 80, 
        height: 70,
        top: '30%',
        right: '30%'
        
    },
})