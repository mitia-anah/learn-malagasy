import React from 'react';
import {View} from 'react-native';
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

  .add('Add button', () => <ToolButton title="Add" name="add" />)
  .add('Seen button', () => <ToolButton title="Done" name="done" />)
  .add('Learnt button', () => <ToolButton title="Done-All" name="done-all" />)
  .add('Back button', () => (
    <ToolButton title="Chevron-Left" name="chevron-left" />
  ))
  .add('Night mode button', () => (
    <ToolButton title="Brightness" name="brightness-6" />
  ));
