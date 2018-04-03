import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios'

import PeopleList from '../components/PeopleList';
import ErrorComponent from '../components/ErrorComponent';

export default class PeoplePage extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			people: [], 
			loading: false,
			error: false,
		};
	}

	componentDidMount() {
		this.setState({loading: true});
		setTimeout( () => {
			axios
				.get("https://randomuser.me/api/?nat=br&results=50")
				.then(response => {
					const { results } = response.data;
					this.setState({
						people: results, 
						loading: false,
					});
				}).catch(error => {
					this.setState({ loading: false, error: true })
				})
		}, 1500)
		
	}

	renderPage() {
		if (this.state.loading) {
			return <ActivityIndicator size="large" color="rgba(99, 110, 114,1.0)" />;
		} else if (this.state.error) {
			return <ErrorComponent />
		} else {
			return (<PeopleList 
				people={this.state.people} 
				onPressItem = { pageParams => {
				this.props.navigation.navigate("PeopleDetail", pageParams);
				} } />
			);
		}
		
	}
		
	render() {
		return (
			<View style = { style.container }>
				{ this.renderPage() }		
			</View>
    		
    	);
  	}
}

const style = StyleSheet.create( {
    container: {
		flex: 1, 
		justifyContent: "center", 

    }
});