import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import ListItem from '../ListItem/ListItem';
import SectionHeading from '../SectionHeading/SectionHeading';
import NextButton from '../ActionButton/ActionButton';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

function List({headingTitle, name, title, color}) {
  return (
    <View>
      <SectionHeading style={styles.heading} title={headingTitle} />
      <ListItem />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    display: 'flex',
    flexDirection: 'row',
  },
  heading: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 10,
    paddingEnd: 20,
  },
});

export default List;
