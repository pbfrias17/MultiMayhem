import React from 'react';
import axios from 'axios';
import t from 'tcomb-form-native';
import { AppRegistry, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import unicorn from '../../assets/unicorn.jpg';

var Form = t.form.Form;

// Defining local User model to verify against
const User = t.struct({
  username: t.String,
  password: t.String,
});

var options = {};

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    console.log(this.refs);
    const value = this.refs.form.getValue();

    // Verified form data will return a non-null value
    if (value) {
      axios.post(Tool.NGROK_URL + '/login', value)
        .then(res => {
          console.log(res.data);
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }} />
        <View style={styles.form}>
          <Form
            ref='form'
            type={User}
            options={options}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Do It</Text>
          </TouchableHighlight>
        </View>
        <View style={{ flex: 1 }} />        
      </View>
    )    
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  form: {
    flex: 3,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

