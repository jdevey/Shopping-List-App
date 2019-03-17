import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/MyStyles';
import NavigationService from '../services/NavigationService';
import ListSummary from './ListSummary';

class Home extends Component {

	constructor(props) {
		super(props);
	}

	renderItem = ({item}) => {
		return (
			<ListSummary id={item.id}/>
		)
	}

	render() {
		return (
			<View style={styles.centered}>
				<Text style={{fontSize: 24}}>Shopping List App Homepage</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => NavigationService.navigate('CreateList')}
				>
					<Text>Make a list!</Text>
				</TouchableOpacity>
				<FlatList 
					data={this.props.lists}
					keyExtractor={(item, index) => item.id.toString()}
					renderItem={this.renderItem}
				/>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		lists: state.lists
	}
}

export default connect(mapStateToProps)(Home)
