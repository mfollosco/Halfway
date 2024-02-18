import React, { useState, useEffect } from "react"; 
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, FlatList, Pressable}from "react-native"; 


export default function AboutPage(){ 
  
  return(
    <View>
      <View style={styles.topBanner}> 
        <Text style={styles.heading}>About</Text>
      </View>
      <Image style={styles.aboutImg} source={require("../../assets/aboutImg.png")}/>
      <View style={styles.aboutTextContainer}>
        <Text style={styles.heading2}>Halfway</Text>
        <Text style={styles.description}>is a way to ease and improve life’s daily stressors, taken from the philosophy that meeting a goal halfway is miles better than not trying at all. HalfwayHomies, the awesome team behind this project (and many more to come), is an all-women group of computer science students at SCU. To make things short, we enjoy making cool stuff!</Text>
        <TouchableOpacity > 
          <Image style={styles.backArrow} source={require('../../assets/images/arrow3.png')} />
        </TouchableOpacity> 
      </View>
    </View>
  )    
};

const styles = StyleSheet.create({ 
  topBanner: {
    width: '100%',
    height: 85, 
    backgroundColor: "#E2D7C6",
  }, 
  heading: {
    marginTop: 15,
    fontSize: 45, 
    fontWeight: "bold", 
    marginBottom: 7, 
    color: "#110C48", 
    textAlign: "center",
  },
  aboutImg:{
    width: "100%",
    height: 375,
  },
  aboutTextContainer:{
    backgroundColor: "#E2D7C6",
    height: "100%"
  },
  heading2:{
    marginTop: 20,
    marginLeft: 20,
    fontSize: 35, 
    fontWeight: "bold", 
    marginBottom: 7, 
    color: "#110C48", 
    textAlign: "left",
  },
  description:{
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15, 
    fontWeight: "500", 
    marginBottom: 7, 
    color: "#110C48", 
    textAlign: "left",
  },
  backArrow:{
    marginTop: 10,
    marginLeft: 20,
    width: 90,
    height: 60,
  },
});