
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Rosny from './Rosny';


storiesOf('Rosny', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('First name', () => <Rosny placeholder= {'Shrii'}/>)
  .add('Last name', () => <Rosny placeholder= {'Jeddia Mickas '} />)
  .add('Number', () => <Rosny placeholder= {'0346465168'} />)
