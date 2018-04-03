import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

import Line from '../components/Line';
import { capitalizeFirst } from '../util';

export default class PeopleDetails extends React.Component{
    render() {
        const { person } = this.props.navigation.state.params;

        return (
            <View style={style.container}>
                <ScrollView style={style.detailContainer} >
                    <Image source = { { uri: person.picture.large } } style={style.avatar} />
                    <Line label="Email:" content={person.email} /> 
                    <Line label="Cidade:" content={capitalizeFirst(person.location.city)} />
                    <Line label="Estado:" content={capitalizeFirst(person.location.state)} /> 
                    <Line label="Tel:" content={person.phone} />
                    <Line label="Cel:" content={person.cell} /> 
                    <Line label="Nacionalidade:" content={person.nat} />   
                </ScrollView>
            </View> 
        )
    }
}

const style = StyleSheet.create({
    avatar: {
        aspectRatio: 1,
        borderRadius: 100,
        height: 200, 
        alignSelf: "center", 
        margin: 15,
    }, 
    container: {
        padding: 15,
    }, 
    detailContainer: {
        backgroundColor: "white",
        marginTop: 20, 
        elevation: 1,
        borderRadius: 8,
        elevation: 3,
    }, 
})