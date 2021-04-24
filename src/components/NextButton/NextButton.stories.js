import React from "react";
import { View } from "react-native";
import NextButton from "./NextButton";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

storiesOf('NextButton', module)
 .addDecorator(story => <View style={{ backgroundColor: '#E5E5E5', flex: 1,
        alignItems: 'center', padding: 100 }}>{story()}</View>)
    .add("add button fill", () => (
    <NextButton 
    fill={true}
    title="Add"
    onPress={action('Button press')}
    />
    ))
    .add('add button no-fill', () => (
        <NextButton
        fill={false} 
        title='Add'
        onPress={action('Button presse!')}
        />
    ))
    .add("next", () => (
    <NextButton
        onPress={action('Button press!')}
        title='next'
        fill={true}
    />
    ))
  