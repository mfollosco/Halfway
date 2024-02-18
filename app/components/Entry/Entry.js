import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Entry = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#9290B4',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    zIndex: 3
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 20,
    height: 20,
    backgroundColor: '#55BCF6',
    marginRight: 15,
    borderRadius: 5,
    opacity: 0.4, 
  },
  itemText: {
    maxWidth: '80%',
    color: '#110C48'
  },
});

export default Entry;