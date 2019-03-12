import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation'
import { View, TextInput,Text} from 'react-native'

class home extends Component {
    state = { text: 'home' }
    render() {
        return (
            <View>
                <TextInput placeholder='请输入用户名称' onChangeText={(text) => this.setState({text})}></TextInput>
                <Text>{this.state.text}</Text>
            </View> 
        );
    }
}

export default home;