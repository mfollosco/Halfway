import React, { useState, useEffect } from "react"; 
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, Image, FlatList, Pressable}from "react-native"; 
import {firebase} from '../../config'


const Friends = props => {
  imageSrc = function(options) {
    return require('../../assets/friendProfile/friend1.png')
  }  

  return(
    <Pressable>
      <View style={styles.friendsContainer}>
        <Image style={styles.friendProfile} source={props.imageName}/>
        <View style={styles.friendsTextContainer}> 
          <Text style={styles.friendName}> {props.Name} </Text> 
          <Text style={styles.friendInfo}> {props.Description} </Text>
          <Text style={styles.friendInfo}> Conections: {props.Streak} </Text>
        </View>
      </View>
    </Pressable>
  )
}
export default function FriendsPage(){ 
  const [friends, setFriends] = useState([]);
  const friendsRef = firebase.firestore().collection('Friends');

  useEffect(async () => {
    (async () => {
      friendsRef
      .onSnapshot(
        querySnapshot => {
          const users = []
          querySnapshot.forEach((doc) => {
            // const {taskName} = doc.data()
            const {Description, Name, Streak, imageName} = doc.data()
            users.push({
              id: doc.id,
              Description,
              Name,
              Streak,
              imageName, 
            })
          })
          setFriends(users)
        }
      )
      return () => {}
    })();
  }, [])

  return(
    <View style={styles.pageContainer}>
      <View style={styles.topBanner}> 
        <Text style={styles.heading}>Friends</Text>
      </View>
      <FlatList 
        style={styles.friendList}
        data={friends} 
        numColumns={1}
        renderItem={({item}) => (
          <Friends Name={item.Name} Description={item.Description} Streak={item.Streak} imageName={require('../../assets/friendProfile/friend1.png')}> </Friends>
        )}
      />

      <View  style={styles.userContainer}>
        <Image style={styles.userProfile} source={require('../../assets/friendProfile/profile.png')}/>  
        <View style={styles.userTextContainer}> 
          <Text style={styles.userName}> hello, Kara! </Text> 
          <Text style={styles.userInfo}> username: {"\n"} apple turnover </Text>
          <Text style={styles.userInfo}> streak: 30 </Text>
        </View>
      </View>
    </View> 
  )
};

const styles = StyleSheet.create({ 
  pageContainer:{
    backgroundColor: '#FFF2DE',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0, 
  },
  topBanner: {
    width: '100%',
    height: 100,
    backgroundColor: "#E2D7C6",
  }, 
  heading: {
    marginTop: 25,
    fontSize: 45, 
    fontWeight: "bold", 
    marginBottom: 7, 
    color: "#110C48", 
    textAlign: "center",
  },
  friendsContainer: {
    marginTop: 20,
    flexDirection: "row", 
    justifyContent: "start",
    alignItems: "top", 
    marginLeft: 20,
    marginRight: 20,
  },
  friendList: {
    height: 475,   
    flexGrow: 0,
  },
  friendProfile: {
    width: 100, 
    height: 100,
    marginBottom: 10, 
  },
  friendsTextContainer:{
    margin: 10,  
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center", 
  },
  friendName:{
    color: "#110C48",
    fontWeight: "bold",
    textAlign: "left", 
    fontSize: 21,  
  },
  friendInfo:{
    color: "#110C48",
    textAlign: "left", 
    fontSize: 18,  
  },
  userContainer:{
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 225, 
    backgroundColor: "#E2D7C6",
      
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "top",
    paddingTop: 27,  
  },
  userProfile:{
    width: 150,  
    height: 150, 
  },
  userTextContainer:{
    margin: 10,
    paddingTop: 7, 
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center", 
  },
  userName: {
    color: "#110C48",
    fontWeight: "bold",
    textAlign: "left", 
    fontSize: 23, 
  },
  userInfo: {
    color: "#110C48",
    textAlign: "left", 
    fontSize: 19, 
    marginTop: 6,  
  }
});