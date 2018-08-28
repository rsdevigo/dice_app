import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default class Dice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {number: 1};
  }
  render() {

    return (
      <View style={styles.body}>
        <Text>Aqui estamos mais um dia</Text>
      </View>
    );

  }

  _rollDice () {

  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dice: {
    margin: 20,
    height: 128,
    width: 128
  }
});
