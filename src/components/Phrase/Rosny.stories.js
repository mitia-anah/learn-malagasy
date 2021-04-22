
import * as React from 'react';
import { TextInput, View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import {Textarea} from 'react-native'

import Rosny from './Rosny';
import CenterView from '../../../storybook/stories/CenterView';


storiesOf('Rosny', module)
  .addDecorator(story => <CenterView>{story()}</CenterView>)
  .add('short', () => <Rosny text= {'Shrii'}/>)
  .add('Long', () => <Rosny text= {'Jeddia Mickas '} />)
  .add('input', () => <Rosny input= {
    <Textarea placeholder="Enter text"/>
  }  />)
  
