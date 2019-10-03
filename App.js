import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import Display from './src/components/Display'
import Buttons from './src/components/Buttons'

export default class App extends Component {

  state = {
    display: '',
    result: ''
  }

  handleOperation = operation => {
    if (operation === 'C') {
      this.setState({
        display: '',
        result: ''
      })
    }
    else if(operation === 'DEL') {
      console.log('this is required    '+ (this.state.display))
      let newDis = this.state.display.substring(0, this.state.display.length - 1);
      console.log('this is after deletion   ' + newDis)
      this.setState({
        display: newDis,
        result: this.state.result
      })
    }
    else if(operation === '=') {
      this.setState({
        display: this.state.result,
        result: ''
      })
    }
    else {
      const display = this.state.display + operation
      let result = this.state.result
      try {

        let fixedOperation = display.split('×').join('*')
        fixedOperation = fixedOperation.split('÷').join('/')
        // fixedOperation = fixedOperation.split('.').join('.')

        result = new String(eval(fixedOperation)).toString()

      }catch(error) {
        console.log(error)
      }
      this.setState({
        display,
        result
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Display state={this.state} />
        <View style = {styles.mid}></View>
        <Buttons operation={this.handleOperation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
  },
  mid : {
    flex : 0.5  ,
    backgroundColor : '#f5f5f5'
  }
});
