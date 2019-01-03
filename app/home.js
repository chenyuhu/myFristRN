
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { DatePicker  } from 'antd';
export default class Home extends Component {
  render(){
    return (
      <View>
        <Text>这是home页面</Text>
        <DatePicker  />
      </View>
    )
  }
}