import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  textHeading: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
  },
});
function SectionHeading({title}) {
  return (
    <View>
      <Text h3>{title}</Text>
    </View>
  );
}
export default SectionHeading;
