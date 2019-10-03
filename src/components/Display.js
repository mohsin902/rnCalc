import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Display = ({ state }) => (
  <View style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.display} adjustsFontSizeToFit numberOfLines={1}>{state.display}</Text>
      { state.result !== '' &&
        <Text style={styles.result} adjustsFontSizeToFit  numberOfLines={1}>{state.result}</Text>
      }
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'space-around',
  },
  display: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 40,
  },
  result: {
    textAlign: 'right',
    color: '#000000',
    fontSize: 30,
  },
})

export default Display;