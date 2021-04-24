
import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    buttonContainerFill: {
        width: 90,
        height: 40,
        backgroundColor:"#06B6D4",
        borderRadius: 30,    
    },
    buttonContainerNoFill: {
        width: 90,
        height: 40,
        backgroundColor:"#fff",
        borderRadius: 30,  
        borderWidth: 1,
        borderColor: '#06B6D4'
    },
    buttonTextWhite: {
        textAlign: 'center',
        paddingTop: 8,
        fontFamily:'Inter',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'
    },
    buttonTextBleu: {
        textAlign: 'center',
        paddingTop: 8,
        fontFamily:'Inter',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#06B6D4'
    }

})

function NextButton({onPress, fill,title}) {
    return (
    <TouchableOpacity onPress={onPress} style={fill ? styles.buttonContainerFill : styles.buttonContainerNoFill}>
        <Text style={fill ? styles.buttonTextWhite : styles.buttonTextBleu}>{title}</Text>
    </TouchableOpacity>
    );
};


export default NextButton;