import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

import styles from '../styles/MyStyles';
import NavigationService from '../services/NavigationService';
import { connect } from 'react-redux';

export default class Home extends Component {

	constructor(props) {
		super(props);
	}

	/*
		Make a component that displays a summary of a list (not the full thing).
		Summary should just show the name and icon.
		Get the list view, add item, delete stuff, and edit stuff working
		Install the swipe gesture stuff
		Get swipe working
	*/

	renderItem = ({item}) => {
		return (
			<ListView />
		)
	}

	render() {
		return (
			<View style={styles.centered}>
				<Text style={{fontSize: 24}}>This is home!</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => NavigationService.navigate('CreateList')}
				>
					<Text>Make a list!</Text>
				</TouchableOpacity>
				<FlatList 
					data={this.props.lists}
					keyExtractor={(item, index) => item.id}
					renderItem={this.renderItem}
					ListEmptyComponent={this.renderEmptyList}
				/>
			</View>
		)
	}
}

const mapStateToProps = state => ({
	lists: state.lists
})

export default connect(mapStateToProps)(Home)