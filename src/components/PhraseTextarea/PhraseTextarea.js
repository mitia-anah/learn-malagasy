// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, TextInput, View } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function PhraseTextarea() {
const [text, onChangeText] = React.useState("");
    return (
    <SafeAreaView > 
        <View>
            <TextInput
                // style={styles.input}
                multiline={true}
                numberOfLines={4}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter text"
            />
        </View>
    </SafeAreaView>
  );
}
