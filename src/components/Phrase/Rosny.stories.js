
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Phrase from './Phrase';


storiesOf('Phrase', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('First name', () => <Phrase placeholder= {'Shrii'}/>)
  .add('Last name', () => <Phrase placeholder= {'Jeddia Mickas '} />)
  .add('Number', () => <Phrase placeholder= {'0346465168'} />)
