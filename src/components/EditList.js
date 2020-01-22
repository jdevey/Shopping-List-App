import React, {Component} from 'react';
import {Text, View, FlatList, TextInput, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/MyStyles';
import NavigationService from '../services/NavigationService';
import { editList } from '../redux/actions';
import getElementByID from '../utils/utility';

class EditList extends Component {
	constructor(props) {
		super(props);
		this.id = this.props.id;
		this.oldName = this.props.oldName;
		this.elem = getElementByID(this.props.lists, this.id);
		this.state = {
			name: this.oldName
		}
	}
	render() {
		return (
			<View style={styles.centered}>
				<TextInput style={{borderColor: 'black', borderWidth: 2, height: 40, width: 160}}
					onChangeText={(name) => this.setState({name: name})} maxLength={100} value={this.state.name} />
				<TouchableOpacity style={styles.button} onPress={() => {
					this.props.editList(this.id, this.state.name);
					NavigationService.navigate('Home', {id: this.id})
				}}>
					<Text>Done</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		lists: state.lists
	}
}

const mapDispatchToProps = dispatch => {
	editList: (id, newName) => {
		dispatch(editList(id, newName));
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditList)
