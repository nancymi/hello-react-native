/**
 * Created by ncyang on 22/02/2017.
 */
import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }
    static defaultProps = {
        title: 'MyScene'
    };

    render() {
        return (
            <View>
                <Text>Current Scene: {this.props.title}</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>Click me to enter next scene</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>Click me to enter previous scene</Text>
                </TouchableHighlight>
            </View>
        );
    }
}