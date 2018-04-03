import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorComponent = props => {
    return (
        <View style={style.container}>
            <Text style={style.errorText}>Oops... algo deu errado!</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }, 
    errorText: {
        alignSelf: "center", 
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default ErrorComponent;