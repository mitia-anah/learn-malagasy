import React, {Fragment} from 'react';
import {Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

function NextButton({onPress, title, name, color, style}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={style}>{title}</Text>
      <Icon name={name} color={color} type="material" />
    </TouchableOpacity>
  );
}

export default NextButton;
