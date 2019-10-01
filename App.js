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
  Button,
  Dimensions
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
  return (
      <View style={styles.rootContainer}>
    <View style={styles.displayContainer}></View>
    <View style = {styles.midContainer}>
    <Text style = {{paddingLeft : 12}}>HISTORY </Text>
      <Icon name="delete" size={28} color="#1e90ff" style = {{right: 0}} />
    </View>
    <View style={styles.inputContainer}>
      <View style={styles.button}>
      </View>
      <View>

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
    flex: 4,
    backgroundColor: '#ffffff'
},
midContainer: {
  flex : 1,
  flexDirection : 'row',
  alignItems : 'center',
  backgroundColor : '#f5f5f5'
},
inputContainer: {
    flex: 8,
    backgroundColor: '#ffffff',
    flexDirection : 'row',
},
button: {

}
});


