import React, { useState } from "react"; 
// import TasksPage from './app/screens/tasks' 
// import Fetch from './src/Fetch'
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image}from "react-native"; 


export default function AddTaskPage(){ 
  const [task, setTask] = useState(""); 
  const [locationType, setLocationType] = useState(true)
  const [taskTypeText, setTaskTypeText] = useState("Location")
  const [taskTypePrompt, setTaskTypePrompt] = useState("Location Address:")
  taskBtnStyle = function(options) {
    if(locationType){
      return {
        marginLeft: 20,
        backgroundColor: "#110C48", 
        borderRadius: 10,
        borderRightWidth: 15,
        borderRightColor: "#514D80",
        padding: 10, 
        width: 350,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
      }
    } else{
      return {
        marginLeft: 20,
        backgroundColor: "#9290B4", 
        borderRadius: 10,
        borderRightWidth: 15,
        borderRightColor: "#514D80",
        padding: 10, 
        width: 350,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
      }
    }
  }
  taskBtnTextStyle = function(options) {
    if(locationType){
      return {
        color: "#FFFFFF", 
        fontWeight: "bold", 
        textAlign: "center", 
        fontSize: 25, 
      }
    } else{
      return {
        color: "#110C48", 
        fontWeight: "bold", 
        textAlign: "center", 
        fontSize: 25, 
      }
    }
  }
  updateTaskType = function(options) {
    setLocationType(!locationType)
    if(locationType){
      setTaskTypeText("Location")
      setTaskTypePrompt("Location Address:")
    } else{
      setTaskTypeText("Scan Object")
      setTaskTypePrompt("Object to Scan")
    }
  }

  return(
    <View style={styles.container}> 
      <ImageBackground source={require('../../assets/images/topBannerImg.png')} style={styles.topBannerImg}>
        <View style={styles.topBanner}>
          <Text style={styles.heading}>Add Tasks</Text> 
          <Text style={styles.headingDescription}>Set new goals!</Text> 
        </View>
      </ImageBackground>

      <Text style={styles.headingItem}>Task Name</Text> 
      <TextInput 
        style={styles.input} 
        placeholder="Ex: Do Homework"
        value={task} 
        onChangeText={(text) => setTask(text)} 
      />

      <Text style={styles.headingItem}>Task Type</Text> 
      {/* <View style={styles.taskBtnContainer}>  */}
      <TouchableOpacity 
          style={this.taskBtnStyle()} onPress={updateTaskType}> 
          <Text style={this.taskBtnTextStyle()}> 
              {taskTypeText}
          </Text> 
      </TouchableOpacity> 
      {/* </View> */}

      <Text style={styles.headingItem}>{taskTypePrompt}</Text> 
      <TextInput 
        style={styles.input} 
        value={task} 
        onChangeText={(text) => setTask(text)} 
      />

      {/* <ImageBackground source={require('../../assets/images/topBannerImg.png')} style={styles.bottomBannerImg}> */}
      <View style = {styles.bottomSection}>
        <View style={styles.taskBtnContainer}> 
          <TouchableOpacity > 
            <Image style={styles.backArrow} source={require('../../assets/images/arrow3.png')} />
          </TouchableOpacity> 
          <TouchableOpacity 
            style={styles.createTaskBtn}>
            <Text style={styles.addButtonText}> 
                Create New Task 
            </Text> 
          </TouchableOpacity> 
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>    
  );
};

const styles = StyleSheet.create({ 
  container: { 
      flex: 1, 
      // padding: 40, 
      marginTop: 40, 
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
  // bottomBannerImg: {
  //   marginTop: 50,
  //   height: 250,
  //   weight: '100%',
  // },
  heading: { 
    fontSize: 45, 
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
  headingItem: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 20,
    fontSize: 30, 
    fontWeight: "bold", 
    color: "#110C48", 
  },
  input: { 
    borderWidth: 5, 
    borderColor: "#C9B495", 
    backgroundColor: "#E2D7C6",
    padding: 10, 
    marginLeft: 20,
    marginRight: 20, 
    borderRadius: 10, 
    fontSize: 18, 
  }, 
  bottomSection: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 675,
    // backgroundColor: "#E2D7C6",
  },
  taskBtnContainer: {
    marginTop: 20,
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "top", 
    marginLeft: 20,
    marginRight: 20,
  }, 
  backArrow:{
    width: 90,
    height: 60,
  },

  createTaskBtn: { 
    backgroundColor: "#9290B4", 
    // borderWidth: 0 15 0 0;
    borderRadius: 15,
    borderRightWidth: 15,
    borderRightColor: "#514D80",
    padding: 10, 
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    width: 240,
  }, 
  addButtonText: { 
    color: "#110C48", 
    fontWeight: "bold", 
    textAlign: "center", 
    fontSize: 25, 
  }, 
});