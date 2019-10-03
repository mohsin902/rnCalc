import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Button from './Button'

class Buttons extends Component {
  
  operatorSelected = operation => {
    console.log(this.props.operation(operation))
    this.props.operation(operation)
  }

  render() {
    const numbers = [
      ['7', '8', '9'],
      ['4', '5', '6'],
      ['1', '2', '3'],
      ['+/-', '0', '. '],
    ]
    const operations = ['C','DEL', '÷', '×', '-', '+','=']
    return (
      <View style={styles.container}>
        <View style={styles.numbers}>
        {numbers.map((row, i) => 
          <View key={i} style={styles.row}>
            {row.map(char => 
              <Button key={char} char={char} operation={this.operatorSelected} />
            )}
          </View>
        )}
        </View>
        <View style={styles.operators}>
          {operations.map(char => 
            <Button key={char} char={char} operation={this.operatorSelected} />
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    borderWidth : 1
  },
  numbers: {
    flex: 3,
  },
  operators: {
    flex: 1,
    backgroundColor: '#ffffff',
    
  }
})

export default Buttons;