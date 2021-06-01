import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';
import List from './List';

storiesOf('List', module)
  .addDecorator(story => (
    <View
      style={{
        backgroundColor: '#E5E5E5',
        paddingStart: 10,
        paddingEnd: 10,
      }}>
      {story()}
    </View>
  ))
  .add('Displays list of number of list items,', () => (
    // The props you pass to list do not fit what the List component expects. 
    <List
      title="Learn"
      name="arrow-forward"
      color="#06B6D4"
      type="material"
      headingTitle="Select a category:"></List>
  ));
