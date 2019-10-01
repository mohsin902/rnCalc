/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity ,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  render(){
    let numbers = []
    let numArr = [[1,2,3] , [4,5,6] , [7,8,9] , ['+/_',0,'.']]
    for(var i=0;i<4;i++){
      let row = []
      for(var j=0;j<3;j++){
        row.push(<TouchableOpacity style = {styles.btn}>
          <Text style= {styles.textbtn}>{numArr[i][j]}</Text>
        </TouchableOpacity>)
      }

      numbers.push(<View style = {styles.row}>{row}</View>)
    }

    let operations = ['+', '-', '*' , '/']
    let opArr = []
    for(var i=0;i<4;i++){
      opArr.push(<TouchableOpacity style = {styles.btn}>
        <Text style = {{color : 'white', fontSize : 25}}>{operations[i]}</Text>
      </TouchableOpacity>)
    }

  return (
      <View style={styles.rootContainer}>
    <View style={styles.displayContainer}>
      <Text style = {styles.text}> 11 * 5</Text>
    </View>
    <View style = {styles.midContainer}>
      <Text style = {styles.caltext}>111</Text>
    </View>
  
    
    <View style={styles.buttons}>
      <View style={styles.numbers}>
       {numbers}
      </View>
      <View style={styles.operations}>
      {opArr}
      </View>
    </View>
</View>
  );
}
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
},

displayContainer: {
    flex: 2,
    backgroundColor: 'white'
},
text : {
    fontSize : 30,
    color : 'black'
},
midContainer: {
  flex : 1,
  backgroundColor : 'white'
},
inputContainer: {
    flex: 8,
    backgroundColor: '#ffffff',
    flexDirection : 'row',
},
buttons: {
  flex: 7,
  flexDirection : 'row'
},
numbers:{
  flex : 3 , 
  backgroundColor : 'white'
},
row : {
  flexDirection : 'row',
  flex : 1,
  justifyContent : 'space-around',
  alignItems : 'center'
},
caltext : {
  fontSize : 24 , 
  color : 'black'
},
operations : {
  flex : 1 , 
  backgroundColor : 'black',
  justifyContent : 'space-around',
  alignItems : 'stretch'

},
btn : {
  flex : 1 ,
  alignItems: 'center',
  alignSelf : 'stretch',
  justifyContent : 'center'
},
textbtn : {
  fontSize : 25
}
});


