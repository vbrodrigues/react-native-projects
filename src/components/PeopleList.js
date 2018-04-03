import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem'

const PeopleList = (props) => {
    const { people, onPressItem } = props;

    return (
        <FlatList 
            style={style.container} 
            data={people} 
            renderItem={ ( {item} ) => (
                <PeopleListItem
                    person = { item } 
                    navigateToPeopleDetail = { onPressItem }/>
            )} 
            keyExtractor={item => item.name.first} />
    );
};

const style = StyleSheet.create( {
    container: {
        // backgroundColor: "#b2bec3"
    }
});

export default PeopleList;