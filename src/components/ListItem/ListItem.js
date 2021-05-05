import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Tile} from 'react-native-elements/dist/tile/Tile';
import categoryList from '../../data/categories.json';

import NextButton from '../ActionButton/ActionButton';

function ListItem({name, title, color, type}) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(categoryList.categories);
  }, []);
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <NextButton name={name} title={title} type={type}></NextButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  separator: {},
});

export default ListItem;
