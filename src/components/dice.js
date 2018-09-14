import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default class Dice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {number: 1};
  }
  render() {
    let dado;
    if (this.state.number == 1) {
      dado = <Image source={require('./numero1.png')} style={styles.dice} />
    } else if (this.state.number == 2) {
      dado = <Image source={require('./numero2.png')} style={styles.dice} />
    } else if (this.state.number == 3) {
      dado = <Image source={require('./numero3.png')} style={styles.dice} />
    } else if (this.state.number == 4) {
      dado = <Image source={require('./numero4.png')} style={styles.dice} />
    } else if (this.state.number == 5) {
      dado = <Image source={require('./numero5.png')} style={styles.dice} />
    } else if (this.state.number == 6) {
      dado = <Image source={require('./numero6.png')} style={styles.dice} />
    }

    return (
      <View style={styles.body}>
        {dado}
        <Button title="" onPress={this._rollDice.bind(this)} />
      </View>
    );

  }

  _rollDice () {
    let sorteio = Math.floor(Math.random()*6)+1;
    console.log(sorteio);
    this.setState({number: sorteio});
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
