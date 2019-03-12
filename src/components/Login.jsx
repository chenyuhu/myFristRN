import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native'
class Login extends Component {
    state = { text: '这个是登录界面' }
    render() {
        return (
            <View>{this.state.text}</View>
        );
    }
}

export default Login;