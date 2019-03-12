/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button,Alert} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.openButotn = this.openButotn.bind(this)
    this.textChange = this.textChange.bind(this)
  }
  openButotn() {
    Alert.alert(`当前输入的是----${this.state.text}---`)
    console.log(this.state);
  }
  textChange(e){
    console.log(e);
    this.setState({text : e})
  }
  render() {
    const status = '121'
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TextInput
        placeholder = {
          '输入手机号'
        }
        onChangeText = {this.textChange}> </TextInput>
        <Text>{this.state.text}</Text>
        <Text style={styles.instructions}></Text>
        <Button title="按钮" onPress={this.openButotn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
