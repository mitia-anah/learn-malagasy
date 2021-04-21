// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, TextInput } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function Rosny({Text}) {

  console.log(Text);
  return (
    <SafeAreaView >
      <TextInput Type={Text}/>
    </SafeAreaView>
  );
}