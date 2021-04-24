
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native"

const styles = StyleSheet.create({

})

function NextButton({onPress}) {
    return (
    <TouchableOpacity onPress={onPress}>
        <Text>{title}</Text>
    </TouchableOpacity>
    );
};


export default NextButton;