/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import MyScene from './MyScene';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    ListView,
    ScrollView,
    Image } from 'react-native';

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}}/>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}</Text>
        );
    }
}

class LotsOfGreetings extends Component {
    render()  {
        return (
            <View stype={{alignItems: 'center'}}>
              <Greeting name='Rexxar' />
              <Greeting name='Jaina' />
              <Greeting name='Valeera' />
            </View>
        );
    }
}

class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = { showText: true };

        setInterval(() => {
            this.setState({ showText: !this.state.showText });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

class BlinkApp extends Component {
    render() {
        return (
            <View>
              <Blink text='I love to blink' />
              <Blink text='Yes blinking is so great' />
              <Blink text='Why did they ever take this out of HTML' />
              <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}

class LotsOfStyles extends Component {

    render() {
        return (
            <View>
              <Text stype={styles.red}>just red</Text>
              <Text style={styles.bigblue}>just bigblue</Text>
              <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
              <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }
}

class FixedDimensionsBasics extends Component {
    render()  {
        return (
            <View>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
              <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

class FlexDimensionsBasics extends Component {
    render()  {
        return (
            <View style={{flex: 1}}>
              <View style={{flex: 1, backgroundColor: 'powderblue'}} />
              <View style={{flex: 2, backgroundColor: 'skyblue'}} />
              <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

class FlexDirectionBasics extends Component {
    render()  {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

class JustifyContentBasics extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

class AlignItemsBasics extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
              <TextInput
                  style={{height: 40}}
                  placeholder="Type here to translate!"
                  onChangeText={(text) => this.setState({text})}
              />
              <Text style={{padding: 10, fontSize: 42}}>
                  {this.state.text.split(' ').map((word) => word && '🍕').join('')}
              </Text>
            </View>
        );
    }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
            <ScrollView>
              <Text style={{fontSize: 96}}>Scroll me plz</Text>
              <Image source={require('./ios/img/favicon.png')} />
              <Image source={require('./ios/img/favicon.png')} />
              <Image source={require('./ios/img/favicon.png')} />
              <Image source={require('./ios/img/favicon.png')} />
              <Image source={require('./ios/img/favicon.png')} />
              <Text style={{fontSize: 96}}>If you like</Text>
              <Image source={require('./ios/img/favicon.png')} />
              <Image source={require('./ios/img/favicon.png')} />
              <Image source={require('./ios/img/favicon.png')} />
              <Image source={require('./ios/img/favicon.png')} />
              <Image source={require('./ios/img/favicon.png')} />
              <Text style={{fontSize: 96}}>Scrolling down</Text>
              <Image source={require('./ios/img/favicon.png')} />
              <Image source={require('./ios/img/favicon.png')} />
              <Image source={require('./ios/img/favicon.png')} />
              <Image source={require('./ios/img/favicon.png')} />
              <Image source={require('./ios/img/favicon.png')} />
              <Text style={{fontSize: 96}}>What's the best</Text>
                <Image source={require('./ios/img/favicon.png')} />
                <Image source={require('./ios/img/favicon.png')} />
                <Image source={require('./ios/img/favicon.png')} />
                <Image source={require('./ios/img/favicon.png')} />
                <Image source={require('./ios/img/favicon.png')} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={require('./ios/img/favicon.png')} />
                <Image source={require('./ios/img/favicon.png')} />
                <Image source={require('./ios/img/favicon.png')} />
                <Image source={require('./ios/img/favicon.png')} />
                <Image source={require('./ios/img/favicon.png')} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        );
    }
}

class YoDawyApp extends Component {
  render() {
    return (
        <MyScene/>
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
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export default class HelloReactNative extends Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
              <Text style={styles.instructions}>
                To get started, edit index.ios.js
              </Text>
              <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
              </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('HelloReactNative', () => YoDawyApp);
