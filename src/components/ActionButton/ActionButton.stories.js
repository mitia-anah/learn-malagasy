import React from 'react';
import {FlatList, View} from 'react-native';
import ActionButton from './ActionButton';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

storiesOf('ActionButton', module)
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
  .add('Pick a solution', () => (
    <View>
      <ActionButton
        title="Pick"
        onPress={action('Button press')}
        name="arrow-forward"
      />
    </View>
  ))
  .add('Correct Solution', () => (
    <ActionButton
      title="Correct"
      onPress={action('Button presse!')}
      name="check"
    />
  ))
  .add('Wrong Solution', () => (
    <ActionButton title="wrong" onPress={action('Button press')} name="clear" />
  ));
