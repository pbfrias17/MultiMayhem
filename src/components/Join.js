import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import io from 'socket.io-client';
import * as Tool from '../../Tools';

export default class Join extends React.Component {
  constructor(props) {
    super(props)

    this.handleBack = this.handleBack.bind(this);
    this.send = this.send.bind(this);
  }
  
  componentDidMount() {
    console.log('JOIN mounted');

    this.sock = io(Tool.NGROK_URL, {
      transports: ['websocket'],
    });

    this.sock.on('connect', () => {
      console.log('i conncted heh');
    });

    this.sock.on('fromServer', (data) => {
      console.log(data.message);
    });
  }

  handleBack(event) {
    Actions.pop();  
  }

  send(e) {
    console.log('hitting SEND');
    this.sock.emit('toServer', { message: 'sup behtchh' }, (res) => {
      console.log('Server responded:\n\t');
      console.log(res.message);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Join a Room!</Text>
        </View>
        <View style={styles.container}>
            <Button title='Go Back' onPress={this.handleBack} />
            <Button title='Send' onPress={this.send} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});