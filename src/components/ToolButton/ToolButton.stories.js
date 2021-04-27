import React from 'react';
// mport {FlatList, View} from 'react-native';
import ToolButton from './ToolButton';
import {storiesOf} from '@storybook/react-native';

storiesOf('ToolButton', module)
  .addDecorator(story => (
    <View
      style={{
        backgroundColor: '#E5E5E5',
        flex: 1,
        alignItems: 'center',
        padding: 100,
      }}>
      {story()}
    </View>
  ))
  .add('Add', () => (
    <View>
      <ToolButton />
    </View>
  ));
