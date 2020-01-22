import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/MyStyles';
import NavigationService from '../services/NavigationService';

class CreateIcon extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.centered}>
				<Text>This is the add icon page! (Unused currently)</Text>
			</View>
		)
	}
}
