
import * as React from 'react';
import { StyleSheet, Textarea } from 'react-native';

import { storiesOf } from '@storybook/react-native'

import PhraseTextarea from './PhraseTextarea';
import style from '../../../storybook/stories/CenterView/style';


storiesOf('PhraseTextarea', module)
.add('input', () => <PhraseTextarea input= {
    <Textarea 
    style={styles.textarea}
    placeholder="Enter text"/>
  }  />)
  
const styles = StyleSheet.create({
    textarea: {
        width:500,
        borderWidth: 3,
        
    }
})

