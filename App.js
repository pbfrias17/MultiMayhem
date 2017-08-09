import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/components/Home';
import Join from './src/components/Join';

import 'babel-polyfill';
import io from 'socket.io-client';

console.ignoredYellowBox = [ 'Setting a timer' ];
console.ignoredYellowBox = [ 'Remote debugger is' ];

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' hideNavBar={true}>
          <Scene key='home' component={Home} title='Home' />
          <Scene key='join' component={Join} title='Join' />
        </Scene>
      </Router>
    );
  }
}
