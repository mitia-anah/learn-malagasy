import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, StyleSheet, Alert} from 'react-native';
import NextButton from '../ActionButton/ActionButton';

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

function ListItem({name, title, color}) {
  return (
    <View style={styles.container}>
      <FlatList
        // showsHorizontalScrollIndicator={false}
        data={dataList}
        renderItem={({item}) => {
          return (
            <View style={styles.listWrapper}>
              <DisplayList name={item.name} />
              <NextButton
                style={styles.button}
                name={name}
                title={title}
                onPress={() => alert('Welcom to learnt screen')}
                color={color}
              />
            </View>
          );
        }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 10,
    paddingEnd: 20,
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
    paddingTop: 20,
    paddingBottom: 20,
    paddingStart: 10,
  },
  button: {
    color: '#06B6D4',
  },
});

export default ListItem;
