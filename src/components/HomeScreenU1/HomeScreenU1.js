import React from 'react';
import List from '../List/List';
import {createStackNavigator} from '@react-navigation/stack';
import SectionHeading from '../SectionHeading/SectionHeading';

const Stack = createStackNavigator();

function HomeScreenU1() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="heading" component={SectionHeading} /> */}
      <Stack.Screen name="List" component={List} />
    </Stack.Navigator>
  );
}

export default HomeScreenU1;
