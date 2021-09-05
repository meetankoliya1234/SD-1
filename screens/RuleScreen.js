import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class RuleScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Rules</Text>
            </View>
        )
    }
}