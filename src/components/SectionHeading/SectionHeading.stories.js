import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';

import SectionHeading from './SectionHeading';

storiesOf('SectionHeading', module)
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
  .add('Select a category', () => <SectionHeading title="Select a category:" />)
  .add('Seen phrases', () => <SectionHeading title="Seen phrases:" />)
  .add('Learnt phrases', () => <SectionHeading title="Learnt phrases:" />)
  .add('Category', () => <SectionHeading title="Category:" />)
  .add('The prases', () => <SectionHeading title="The prases:" />)
  .add('Pick a solution', () => <SectionHeading title="Pick a solution:" />);
