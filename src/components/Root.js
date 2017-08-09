import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Join extends React.Component {
  constructor(props) {
    super(props)

    this.handleBack = this.handleBack.bind(this);
  }
  
  handleBack(event) {
    Actions.pop();  
  }

  render() {
    return (
      <View style={styles.container}>
        root doe
        {this.props.children}
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