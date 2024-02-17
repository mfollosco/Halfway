import React, { useState } from "react"; 
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet, 
  Image,
  ImageBackground,
} from "react-native"; 
  
const App = () => { 
  const [task, setTask] = useState(""); 
  const [tasks, setTasks] = useState(["Eat Healthy", "Go to the Gym", "Study"]); 
  const [editIndex, setEditIndex] = useState(-1); 

  const handleAddTask = () => { 
    // if (task) { 
      if (editIndex !== -1) { 
        // Edit existing task 
        const updatedTasks = [...tasks]; 
        updatedTasks[editIndex] = task; 
        setTasks(updatedTasks); 
        setEditIndex(-1); 
      } else { 
        // Add new task 
        setTasks([...tasks, "test"]); 
      } 
      setTask(""); 
    // } 
  }; 

  const handleEditTask = (index) => { 
    const taskToEdit = tasks[index]; 
    setTask(taskToEdit); 
    setEditIndex(index); 
  }; 

  // const handleDeleteTask = (index) => { 
  //   const updatedTasks = [...tasks]; 
  //   updatedTasks.splice(index, 1); 
  //   setTasks(updatedTasks); 
  // }; 

  const renderItem = ({ item, index }) => ( 
    <View style={styles.taskItem}> 
      <View style={styles.task}>
        <Text style={styles.taskText}>{item}</Text> 
      </View>
      <View 
        style={styles.taskButtons}> 
        <TouchableOpacity 
          style={styles.viewTaskBtn} 
          onPress={() => handleEditTask(index)}> 
          <Image style={styles.taskArrow} source={require('./assets/images/arrow2.png')} />
        </TouchableOpacity> 
      </View> 
    </View> 
  ); 

  return ( 
      <View style={styles.container}> 
          <ImageBackground source={require('./assets/images/topBannerImg.png')} style={styles.topBannerImg}>
            <View style={styles.topBanner}>
              <Text style={styles.heading}>View Your Tasks</Text> 
              <Text style={styles.headingDescription}>Build towards your goals by working on current tasks or add new tasks</Text> 
            </View>
          </ImageBackground>
          <Text style={styles.heading2}>Current Tasks</Text> 
          <FlatList 
            style={styles.taskList}
              data={tasks} 
              renderItem={renderItem} 
              keyExtractor={(item, index) => index.toString()} 
          /> 
          {/* <TextInput 
              style={styles.input} 
              placeholder="Enter task"
              value={task} 
              onChangeText={(text) => setTask(text)} 
          />  */}
          <TouchableOpacity 
              style={styles.createTaskBtn} 
              onPress={handleAddTask}> 
              <Text style={styles.addButtonText}> 
                  Create New Task 
              </Text> 
          </TouchableOpacity> 
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
  input: { 
    borderWidth: 3, 
    borderColor: "#ccc", 
    padding: 10, 
    marginLeft: 20,
    marginRight: 20, 
    borderRadius: 10, 
    fontSize: 18, 
  }, 
  createTaskBtn: { 
    backgroundColor: "#9290B4", 
    // borderWidth: 0 15 0 0;
    borderRadius: 20,
    borderRightWidth: 15,
    borderRightColor: "#514D80",
    padding: 10, 
    margin: 20, 
    height: 75,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  }, 
  addButtonText: { 
    color: "#110C48", 
    fontWeight: "bold", 
    textAlign: "center", 
    fontSize: 28, 
  }, 
  heading2: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 35, 
    fontWeight: "bold", 
    color: "#110C48", 
  },
  taskList: {
    marginTop: 20,
  },
  taskItem:{
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "top", 
  },
  task: { 
    marginBottom: 15, 
    fontSize: 18, 
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 15,
    borderColor: "#C9B495",
    backgroundColor: "#E2D7C6",
    borderWidth: 5,
    width: 260,
  }, 
  taskText: {
    fontSize: 19, 
  },
  taskButtons: { 
    // flexDirection: "row", 
    marginRight: 15,
  }, 
  taskArrow:{
    width: 80,
    height: 50,
  },
  viewTaskBtn: {
    // width: 40,
    // height: 30,
  },
  // editButton: { 
  //   marginRight: 10, 
  //   color: "green", 
  //   fontWeight: "bold", 
  //   fontSize: 18, 
  // }, 
  // deleteButton: { 
  //   color: "red", 
  //   fontWeight: "bold", 
  //   fontSize: 18, 
  // }, 
}); 
  
export default App;