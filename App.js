import { StackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetails from './src/pages/PeopleDetails';
import { capitalizeFirst } from './src/util'
// console.disableYellowBox = true

export default StackNavigator({
	'Main': {
		screen: PeoplePage, 
	}, 
	'PeopleDetail': {
		screen: PeopleDetails, 
		navigationOptions: ( { navigation } ) => {
			const personName = capitalizeFirst(navigation.state.params.person.name.first);
			return ( {
				title: personName, 
				headerTitleStyle: {
					color: "rgba(99, 110, 114,1.0)", 
					fontSize: 20, 
				}, 
				headerStyle: {
					backgroundColor: "#81D4FA"
				}
			});
		}
	}
}, {
	navigationOptions: {
		title: "Contatos",
		headerTintColor: "rgba(99, 110, 114,1.0)",
		headerStyle: {
			backgroundColor: "rgba(255, 234, 167,.8)", 
			borderBottomWidth: 0, 
			// borderBottomColor: "white", 
		}, 
		headerTitleStyle: {
			color: "rgba(99, 110, 114,1.0)", 
			fontSize: 20,
			alignSelf: "center",
		}
	}
});

