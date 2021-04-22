// components/Task.js
import * as React from 'react';
import { StyleSheet,Text, SafeAreaView, TextInput, View } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function PhraseTextarea({ defaultValue,onChangeText, inputValue, editableInput, unEditableInput}) {
    return (
    <SafeAreaView > 
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder=''
                value={inputValue}
                editable={editableInput}
            />

            <TextInput
            editable={unEditableInput}
            value={defaultValue}
            />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    input: {
        width:365,
        height: 100,
        borderWidth: 3,        
    },
//     border: 1px solid #E5E5E5;
// box-sizing: border-box;
// border-radius: 3px;

})
