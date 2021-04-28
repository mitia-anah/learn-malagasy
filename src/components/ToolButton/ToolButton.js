import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Button, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
// import {Icon} from 'react-native-element

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  button: {
    backgroundColor: '#06B6D4',
    width: 40,
    borderRadius: 100,
    height: 40,
  },
  icon: {
    textAlign: 'center',
    paddingTop: 6,
  },
});

function ToolButton({name}) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.button}>
        <Icon style={styles.icon} name={name} color="#fff" type="material" />
      </View>
    </TouchableOpacity>
  );
}
export default ToolButton;
