import {View, Text, FlatList, StyleSheet, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import {firebase} from '../config'

const Fetch = () => {
  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection('Task');

  useEffect(async () => {
    (async () => {
      todoRef
      .onSnapshot(
        querySnapshot => {
          const users = []
          querySnapshot.forEach((doc) => {
            // const {taskName} = doc.data()
            const {CompletionTimes, location, taskName} = doc.data()
            users.push({
              id: doc.id,
              taskName,
            })
          })
          setUsers(users)
        }
      )
      //Put your logic here
  
    })();
  }, [])

  return(
    <View>
      <FlatList 
        data={users}
        numColumns={1}
        renderItem={({item}) => (
          <Pressable>
            <View>
              <Text style={styles.task}> {item.taskName}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({ 
  task: { 
    marginTop: 100
  }, 
})

export default Fetch