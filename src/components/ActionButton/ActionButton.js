import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({});

function NextButton({onPress, title, name}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
      <Icon name={name} type="material" />
    </TouchableOpacity>
  );
}

export default NextButton;
