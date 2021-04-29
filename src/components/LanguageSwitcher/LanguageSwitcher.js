import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 40,
    backgroundColor: '#06B6D4',
    borderRadius: 30,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    paddingStart: 7,
    paddingEnd: 14,
    paddingTop: 6,
  },
  text: {
    color: '#fff',
    marginRight: 4,
    marginLeft: 4,
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 'normal',
    lineHeight: 16,
  },
});

function LanguageSwitcher() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity>
          <Text style={styles.text}>EN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon color="#fff" name="swap-horiz" type="material" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>MA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LanguageSwitcher;
