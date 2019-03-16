import React, { Component } from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/MyStyles';
import List from '../models/List';
import { addList } from '../redux/actions';  //TODO make this
import NavigationService from '../services/NavigationService';
import store from '../redux/store';
import { createList } from '../redux/actions';

class CreateList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			icon: ''
		}
	}

	render() {
		return (
			<View style={styles.centered}>
				<Text>List name: </Text>
				<TextInput style={{borderColor: 'black', borderWidth: 2, height: 40, width: 160}} onChangeText={(text) => this.setState({name: text})} maxLength={100} value={this.state.name} />
				<Text>Icon image url: </Text>
				<TextInput style={{borderColor: 'black', borderWidth: 2, height: 40, width: 160}} onChangeText={(text) => this.setState({icon: text})} maxLength={100} value={this.state.url} />
				<TouchableOpacity style={styles.button} onPress={() => {
						this.props.createList(this.state.name, this.state.url);
						NavigationService.navigate('Home') // TODO change Home to ListView
					}}>
					<Text>Create!</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => NavigationService.navigate('Home')}><Text>Cancel</Text></TouchableOpacity>
			</View>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	createList: (name, icon) => {
		dispatch(createList(name, icon, new Date().toDateString()));
	}
})

export default connect(null, mapDispatchToProps)(CreateList)
