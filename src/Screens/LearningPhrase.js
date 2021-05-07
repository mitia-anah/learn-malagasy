import React from 'react';
import {Button} from 'react-native';

function LearningPhrase({navigation}) {
  return (
    <Button title="Back to home" onPress={() => navigation.navigate('Home')} />
  );
}

export default LearningPhrase;
