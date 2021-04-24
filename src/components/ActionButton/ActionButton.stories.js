import React from "react";
import { View } from "react-native";
import ActionButton from "./ActionButton";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

storiesOf('ActionButton', module)
 .addDecorator(story => <View style={{ backgroundColor: '#E5E5E5', flex: 1,
        alignItems: 'center', padding: 100 }}>{story()}</View>)
    .add("Pick a solution", () => (
    <ActionButton 
    title="Pick"
    onPress={action('Button press')}
    />
    ))
    .add('Correct Solution', () => (
        <ActionButton
        title='Correct'
        onPress={action('Button presse!')}
        />
    ))
    .add("Wrong Solution", () => (
    <ActionButton
        title='next'
        onPress={action('Button press')}
    />
    ))
  