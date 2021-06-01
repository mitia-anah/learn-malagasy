import React from 'react';
import {View} from 'react-native';
import List from '../components/List/List';

//The component should have no reference to the user story => HomeScreen is a better user story
function HomeScreenU1() {
  return (
    <View>
      <List />
    </View>
  );
}

export default HomeScreenU1;
