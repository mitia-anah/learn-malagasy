import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ActionButton from '../ActionButton/ActionButton';

// const dataList = require('../../data/categories.json');
// console.log(dataList);
const dataList = [
  {
    id: '1',
    name: 'An unncessessarly loooong cat... ',
  },
  {
    id: '2',
    name: 'At the market',
  },
  {
    id: '3',
    name: 'Single words',
  },
  {
    id: '4',
    name: 'At restaurent',
  },
  {
    id: '5',
    name: 'Food',
  },
  {
    id: '6',
    name: 'All',
  },
  {
    id: '7',
    name: 'Greetings',
  },
];

const DisplayList = ({name}) => (
  <View>
    <Text style={styles.text}>{name}</Text>
  </View>
);

Separator = () => <View style={styles.separator} />;

function ListItem() {
  const renderItem = ({item}) => <DisplayList name={item.name} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        R
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 20,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
  text: {
    color: '#111827',
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    padding: 20,
  },
});

export default ListItem;
