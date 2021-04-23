// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function Rosny() {
  const [text, onChangeText] = React.useState("");
  // const [text, onChangeText] = React.useState("Useless Text");

  console.log(Text);
  return (
    <SafeAreaView >
      <Text>
        {text}
      </Text>
      <TextInput
        // style={styles.input}
        multiline={true}
        numberOfLines={4}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter text"
      />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   input: {
//     padding: '3rem',
//     borderWidth: 1,

//   },
// });

