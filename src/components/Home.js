import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import * as Tool from '../../Tools';
import LoginForm from './LoginForm';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    axios.post(Tool.NGROK_URL + '/login', { username: 'p3', password: '123' } )
      .then(res => {
        console.log(res.data);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.container, { flex: 1, marginTop: 30 }]}>
          <Text style={styles.titleText}>Mobile Multi Minis</Text>       
        </View>
        <View style={[styles.container]}>
          <Text style={styles.messageText}>Login or Sign Up</Text>   
          <LoginForm />
        </View>
        <View style={[styles.container]}>
          <Text style={styles.messageTextSmall}>An app by d2r.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    color: '#000000',
    marginTop: 10,
    fontSize: 20
  },
  messageTextSmall: {
    fontSize: 12
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold'
  }
});