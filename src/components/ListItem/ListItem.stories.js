import React, {useEffect} from 'react';
import ListItem from './ListItem';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

storiesOf('ListItem', module)
  .addDecorator(story => (
    <View
      style={{
        backgroundColor: '#E5E5E5',
        flex: 1,
        alignItems: 'center',
        padding: 10,
      }}>
      {story()}
    </View>
  ))
  .add('Display list', () => <ListItem />);
