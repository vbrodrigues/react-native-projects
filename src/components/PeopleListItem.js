import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { capitalizeFirst } from '../util';

const PeopleListItem = props => {
    const { person, navigateToPeopleDetail } = props;
    const { title, first, last } = person.name;
    return (
        <TouchableOpacity onPress={ () => navigateToPeopleDetail({ person }) } >
            <View style = { style.line }>
                <Image style={style.avatar} source = { { uri: person.picture.large } } />
                <Text style = { style.lineText }>{
                    `${capitalizeFirst(title)} ${capitalizeFirst(first)} ${capitalizeFirst(last)}`}
                </Text>
            </View> 
        </TouchableOpacity>
    );
}

export default PeopleListItem;

const style = StyleSheet.create({
    line: {
        height: 110,
        // borderBottomWidth: 7, 
        // borderBottomColor: "#ecf0f1", 
        alignItems: "center", 
        flexDirection: "row", //necessário para centralizar verticalmente os itens dentro
        borderRadius: 8, 
        backgroundColor: "white", 
        margin: 7, 
        elevation: 2, 
    }, 
    lineText: {
        fontSize: 20,
        fontFamily: "Roboto", 
        paddingLeft: 15,
        color: "#2d3436", 
        flex: 6
    },
    avatar: {
        aspectRatio: 1,
        flex: 1, 
        marginLeft: 15, 
        borderRadius: 50
    }
})