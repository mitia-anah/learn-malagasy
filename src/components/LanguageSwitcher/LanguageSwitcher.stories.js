import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';

storiesOf('LanguageSwitcher', module)
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
  .add('Language switcher', () => <LanguageSwitcher />);
