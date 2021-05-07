import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreenU1 from './src/Screens/HomeScreenU1';
import LearningPhrase from './src/Screens/LearningPhrase';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="Home" component={HomeScreenU1} />
        <Stack.Screen name="LearningPhrase" component={LearningPhrase} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
