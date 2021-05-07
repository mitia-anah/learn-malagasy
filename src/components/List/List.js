import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ListItem from '../ListItem/ListItem';

function List() {
  return (
    <SafeAreaView style={styles.container}>
      <ListItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
  },
});

export default List;
