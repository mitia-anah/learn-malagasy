import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // Do you use the container styles?
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
    padding: 16,
    paddingStart: 0,
  },
});
function SectionHeading({title}) {
  return (
    <View>
      <Text style={styles.textHeading} h3>
        {title}
      </Text>
    </View>
  );
}
export default SectionHeading;
