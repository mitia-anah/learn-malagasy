
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Rosny from './Rosny';


storiesOf('Rosny', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('First name', () => <Rosny Text= {'Shrii'}/>)
  .add('Last name', () => <Rosny Text= {'Jeddia Mickas '} />)
  .add('Number', () => <Rosny Text= {'0346465168'} />)
