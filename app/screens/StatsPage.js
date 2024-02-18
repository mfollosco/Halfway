import React from "react";
import { useState } from "react";
import { KeyboardAvoidingView, ImageBackground, ScrollView, TouchableOpacity, StyleSheet, Text, View, Image, SafeAreaView, Button, Pressable, Keyboard, TextInput } from 'react-native';
import BackButton from "../components/BackButton/BackButton";
import Entry from "../components/Entry/Entry";

export default function StatsPage() {

    const [entry, setEntry] = useState();
    const [entryItems, setEntryItems] = useState([]);

    const handleAddEntry = () => {
        Keyboard.dismiss();
        setEntryItems([...entryItems, entry])
        setEntry(null)
    }

    return (
        <View style = {styles.background}>
            <ImageBackground 
                style = {styles.backgroundimage}
                source = {require("./images/StatsPage.png")}
            >
                <ScrollView style={styles.scrollView}
                keyboardShouldPersistTaps='handled'>

                <View>
                    <BackButton />
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
                </View>

                <View style={styles.entriesWrapper}>
                
                <View style={styles.entries}>
                    {
                    entryItems.map((item, index) => {
                        return <Entry key={index} text={item} />
                    })
                    }
                </View> 

                <KeyboardAvoidingView 
                    style={styles.writeEntryWrapper}
                >
                    <TextInput 
                        style={styles.input} 
                        placeholder={"Write an entry"} 
                        value={entry} 
                        onChangeText={text => setEntry(text)}
                    />

                    <TouchableOpacity onPress = {() => handleAddEntry()}>
                        <View style={styles.addButton}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                </View>
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
        bottom: '40%',
        alignSelf: 'center'
    },

    text: {
        alignSelf: 'center',
        fontSize: 60,
        fontWeight: 'bold',
        bottom: '30%',
        left: '5%'
    },

    statsbackground: {
        backgroundColor: "#E2D7C6",
        width: 399, 
        height: 400,
        bottom: '5%'
    },

    SetGoal: {
        bottom: '39%',
        left: '66%',
    },

    scrollView: {
        flexGrow: 1
    },

    entriesWrapper: {
        paddingTop: 3,
        paddingHorizontal: 20,
    },

    entries: {
        marginTop: 30,

    },

    writeEntryWrapper: {
        position: 'absolute',
        bottom: '10%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
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
        width: 60,
        height: 60,
        backgroundColor: '#9290B4',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#110C48',
        borderWidth: 1,
    }, 

})