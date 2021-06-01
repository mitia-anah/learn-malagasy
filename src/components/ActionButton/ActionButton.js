import React, {Fragment} from 'react';
import {Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function NextButton({onPress, title, name, style}) {
  // Icon too big, wrong color
  // prop "name" would be easierto understand if it was named iconName
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={style}>{title}</Text>
      <Icon name={name} color="#06B6D4" type="material" />
    </TouchableOpacity>
  );
}

export default NextButton;
