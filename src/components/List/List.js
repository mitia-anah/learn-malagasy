import React, {useState, useEffect} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListItem from '../ListItem/ListItem';
import categoryList from '../../data/categories.json';
import NextButton from '../ActionButton/ActionButton';

Separator = () => <View style={styles.separator} />;

function List() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    setCategory(categoryList.categories);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={false}
        data={category}
        renderItem={({item}) => {
          return (
            <View style={styles.listWrapper}>
              <ListItem
                title={item.name.en}
                onPress={() => alert('welcome to learnt screen')}
              />
            </View>
          );
        }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
});

export default List;
