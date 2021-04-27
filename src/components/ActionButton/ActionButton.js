import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  check: {
    color: '#06D440',
  },
  arrowForward: {
    color: '#06B6D4',
  },
  clear: {
    color: '#D4068E',
  },
});

function NextButton({onPress, title, name, type}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{title}</Text>
      <Icon name={name} type="material" />
    </TouchableOpacity>
  );
}

export default NextButton;
