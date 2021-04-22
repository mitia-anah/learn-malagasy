
import * as React from 'react';
import {CenterView, TextInput} from 'react-native'

import { storiesOf } from '@storybook/react-native'

import PhraseTextarea from './PhraseTextarea';
// import { TextInput } from 'react-native';

storiesOf("PhraseTextarea", module).add("editable", () => {
  function Parent({ children, ...props }) {
    const [state, setState] = React.useState('');
    return <div>{children(state, setState)}</div>;
  }

  return (
    <Parent>
      {(state, setState) => (
        <PhraseTextarea
          inputValue={state.value}
          onChangeText={e => setState({ value: e.target.value })}
          multiline={true}
          numberOfLines={4}
          editableInput={true}
          placeholder="Enter text"
        />
      )}
    </Parent>
  );
});

storiesOf('PhraseTextarea', module)
.addDecorator(story => <CenterView>{story()}</CenterView>)
.add('uneditable', () => 
<PhraseTextarea
    defaultValue='Roa ambiny folo'
    multiline={true}
    numberOfLines={4}
    unEditableInput={false}
/>)
  


