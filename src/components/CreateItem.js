import React, {Component} from 'react';
import {Text, View, FlatList, TextInput, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/MyStyles';
import NavigationService from '../services/NavigationService';
import { createItem } from '../redux/actions';

class CreateItem extends Component {

	constructor(props) {
		super(props);
		this.id = this.props.id;
		this.parentID = this.props.parentID;
		this.state = {
			text: ''
		}
	}

	render() {
		return (
			<View style={styles.centered}>
				<Text>Item text: </Text>
				<TextInput style={{borderColor: 'black', borderWidth: 2, height: 40, width: 160}}
					onChangeText={(text) => this.setState({text: text})} maxLength={100} value={this.state.text} />
				<TouchableOpacity style={styles.button} onPress={() => {
					this.props.createItem(this.parentID, this.state.text);
					NavigationService.navigate('ListView', {id: this.parentID});
				}}>
					<Text>Create</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => NavigationService.navigate('ListView', {id: this.parentID})}>
					<Text>Cancel</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	createItem: (parentID, text) => {
		dispatch(createItem(parentID, text));
	}
})

export default connect(null, mapDispatchToProps)(CreateItem)
