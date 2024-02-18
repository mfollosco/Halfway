import React, { useState, useEffect } from "react"; 
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, FlatList, Pressable}from "react-native"; 


export default function GeneralAnalyticsPage({navigation}){ 
  const handleBackPage = () => {
    navigation.navigate("HomePage"); 
  }
  const handleTaskAnalytics = () => {
    navigation.navigate("StatsPage"); 
  }
  return(
    <View style={styles.container}> 
      <ImageBackground source={require('../../assets/images/topBannerImg2.png')} style={styles.topBannerImg}>
        <View style={styles.topBanner}>
          <Text style={styles.heading}>General Analytics</Text> 
          <Text style={styles.headingDescription}>Overview of how you've been progressing towards your goals!</Text> 
        </View>
      </ImageBackground>

      <View style={styles.imgContainer}>
        <Image style={styles.analyticsImg1} source={require('../../assets/images/arrow3.png')} />
        <View style={styles.innerImgContainer}>
          <Image style={styles.analyticsImg2} source={require('../../assets/images/arrow3.png')} />
          <Image style={styles.analyticsImg2} source={require('../../assets/images/arrow3.png')} />
        </View>
      </View>

      <ImageBackground source={require('../../assets/images/topBannerImg2.png')} style={styles.topBannerImg}>
        <View style={styles.bottomBanner}>
          <TouchableOpacity onPress={handleBackPage}> 
            <Image style={styles.backArrow} source={require('../../assets/images/arrow3.png')} />
          </TouchableOpacity> 
          <TouchableOpacity 
            style={styles.viewTaskAnalytics} onPress={handleTaskAnalytics}>
            <Text style={styles.viewTaskAnalyticsText}> 
              View Task-Based {"\n"} Analytics
            </Text> 
          </TouchableOpacity> 
        </View>
      </ImageBackground>
    </View>
  )    
};

const styles = StyleSheet.create({ 
  container: { 
      flex: 1, 
      // padding: 40, 
      backgroundColor: "#FFF2DE",
  }, 
  topBanner: { 
    position: 'absolute',
    top: 25, 
    left: 25, 
    right: 25, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
  topBannerImg: {
    height: 155,
    weight: '100%',
    // aspectRatio: 1,
  },
  bottomBanner: {
    height: '100%',
    // width: '100%',
    flexDirection: 'row',
    margin: 20,
    marginTop: 40,
    justifyContent: "space-between",
  },
  // bottomBannerImg: {
  //   marginTop: 50,
  //   height: 250,
  //   weight: '100%',
  // },
  heading: { 
    fontSize: 37, 
    fontWeight: "bold", 
    marginBottom: 7, 
    color: "#110C48", 
    textAlign: "center",
  }, 
  headingDescription: {
    flex: 1,
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#110C48",
  },
  analyticsImg1:{
    width: 270,
    height: 200,
    margin: 10,
  },
  analyticsImg2:{
    width: 150,
    height: 150,
    margin: 10,
  },
  imgContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  innerImgContainer: {
    flexDirection: "row",
  }, 
  backArrow:{
    width: 90,
    height: 60,
  }, 
  viewTaskAnalytics:{
    backgroundColor: "#9290B4", 
    // borderWidth: 0 15 0 0;
    borderRadius: 15,
    borderRightWidth: 15,
    borderRightColor: "#514D80",
    padding: 5, 
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    width: 240,
  },
  viewTaskAnalyticsText: {
    color: "#110C48", 
    fontWeight: "bold", 
    textAlign: "center", 
    fontSize: 17, 
  }
});