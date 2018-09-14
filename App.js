import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dice from './src/components/dice';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dice title="Lançar Dado 3" />
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
