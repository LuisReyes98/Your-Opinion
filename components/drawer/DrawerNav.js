import React, { Component } from 'react';
import {DrawerNavigator} from 'react-navigation';
import Home from './../Home.js';

import Critic from './../critics/Critic.js';
import DrawerComponents from './DrawerComponents.js';


export default DrawerNav = DrawerNavigator (
  {
    Home:{ screen: Home },
    Critic:{ screen: Critic },
  },
  {
   	contentComponent: DrawerComponents
  });