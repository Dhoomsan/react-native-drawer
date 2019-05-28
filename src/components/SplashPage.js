import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer, } from 'react-navigation';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
export class SplashPage extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    _onPressButton() {
        alert('You tapped the button!')
    }
    //Binding the function with class
    buttonClickListener = () => {
        alert("Clicked On Button !!!");
    };
    render() {
        return (
            // <View style={styles.container}>
            //     <Text style={styles.welcome}>Welcome to tuts!</Text>
            //     <Text style={styles.instructions}>To get started, edit App.js</Text>
            //     <Text style={styles.instructions}>{instructions}</Text>
            //     <Button
            //         onPress={this._onPressButton}
            //         title="Learn More"
            //         color="#841584"
            //     // accessibilityLabel="Learn more about this purple button"
            //     />
            //     <Button
            //         onPress={this.buttonClickListener}
            //         title="Click ME"
            //         color="#00B0FF"
            //     />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        //source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                        source={require('../images/drawer.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
        screen: Screen1,
        navigationOptions: ({ navigation }) => ({
            title: 'Demo Screen 1',
            headerLeft: <SplashPage navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const Screen2_StackNavigator = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
        screen: Screen2,
        navigationOptions: ({ navigation }) => ({
            title: 'Demo Screen 2',
            headerLeft: <SplashPage navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9500',
            },
            headerTintColor: '#fff',
        }),
    },
});


//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
//For React Navigation 3.+
const Screen3_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
        screen: Screen3,
        navigationOptions: ({ navigation }) => ({
            title: 'Demo Screen 3',
            headerLeft: <SplashPage navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        }),
    },
});


//For React Navigation 2.+ need to use DrawerNavigator instead createDrawerNavigator
//const DrawerNavigatorExample = DrawerNavigator({
//For React Navigation 3.+
const DrawerNavigatorExample = createDrawerNavigator({
    //Drawer Optons and indexing
    Screen1: {
        //Title
        screen: FirstActivity_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Demo Screen 1',
        },
    },
    Screen2: {
        //Title
        screen: Screen2_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Demo Screen 2',
        },
    },
    Screen3: {
        //Title
        screen: Screen3_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Demo Screen 3',
        },
    },
});

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


//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(DrawerNavigatorExample);