/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform } from 'react-native';
import { SafeAreaView,DrawerNavigator,createDrawerNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import Home from './components/Home.js';
import Critic from './components/critics/Critic.js';
import DrawerNav from './components/drawer/DrawerNav.js';


export default class App extends Component<{}>  {
  componentDidMount() {
    SplashScreen.hide()
  }
  render() {
    return (
      <DrawerNav/>
    );
  }
}

