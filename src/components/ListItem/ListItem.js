import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import categoryList from '../../data/categories.json';
import {Icon} from 'react-native-elements';

import NextButton from '../ActionButton/ActionButton';

Separator = () => <View style={styles.separator} />;

function ListItem({name, title, color}) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(categoryList.categories);
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={category}
        renderItem={({item}) => (
          <ListItem
            style={styles.text}
            name={name}
            id={item.id}
            title={item.name.en}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}></FlatList>
      <Text>{name}</Text>
      <NextButton
        style={styles.text}
        title={title}
        onPress={() => alert('Welcom to learnt screen')}
        color={color}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
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
