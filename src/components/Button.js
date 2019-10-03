import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

class Button extends Component {

  handleOperation = () => {
    console.log('all props in button.js    ' + this.props)
    this.props.operation(this.props.char)
  }
  componentDidMount = () => {
    console.log(this.props.char)
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.operation(this.props.char)}
        style={styles.container}
      >
        <Text style={styles.text}>{this.props.char}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 30
  }
})

export default Button;