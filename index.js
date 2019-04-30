/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


//Import a library to help create a component
import React from 'react';
import {AppRegistry} from  'react-native';
import Header from './src/components/header';

//Create a  Component
const App = () => (
       <Header headerText={'Albums'}/>
    );
//Render it to device
AppRegistry.registerComponent('albums',() => App);

