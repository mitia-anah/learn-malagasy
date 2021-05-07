import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import categoryList from '../../data/categories.json';
import SectionHeading from '../SectionHeading/SectionHeading';
import NextButton from '../ActionButton/ActionButton';
import {useNavigation} from '@react-navigation/native';

const Separator = () => <View style={styles.separator} />;

function ListItem() {
  const [category, setCategory] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    setCategory(categoryList.categories);
  }, []);

  return (
    <View style={styles.container}>
      <SectionHeading title="Select category:" />
      <View style={styles.innerContainer}>
        <FlatList
          data={category}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.listWrapper}>
                <Text>{item.name.en}</Text>
                <NextButton
                  style={styles.arrow}
                  title="Pick"
                  name="arrow-forward"
                  type="material"
                  onPress={() =>
                    navigation.navigate('LearningPhrase', {
                      categoryName: item.name.en,
                      categoryId: item.id,
                    })
                  }
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 68,
    marginStart: 23,
    marginEnd: 23,
    marginBottom: 207,
  },
  innerContainer: {
    backgroundColor: '#ffffff',
    borderColor: '#E5E5E5',
    borderRadius: 3,
  },
  listWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    overflow: 'scroll',
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },
  arrow: {
    color: '#06B6D4',
  },
});

export default ListItem;
