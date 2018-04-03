import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({ label = "", content = "-"}) => {
    return(
        <View style={style.line}>
            <Text style={[style.cell, style.label, label.length > 8 ? style.longLabel : null]}>{ label }</Text>
            <Text style={[style.cell, style.content]}>{ content } </Text>
        </View>
    );
}

const style = StyleSheet.create({
    line: {
        flexDirection: "row", 
        paddingTop: 5, 
        paddingBottom: 8,
    }, 
    cell: {
        fontSize: 18, 
        paddingLeft: 15,         
    }, 
    label: {
        fontWeight: "bold",
        flex: 1,
        color: "rgba(99, 110, 114,1.0)"
    }, 
    content: {
        flex: 4,
        color: "rgba(99, 110, 114,1.0)",
    }, 
    longLabel: {
        fontSize: 12,
    }
})

export default Line;