import React, {Component} from 'react';
import {Text, View, FlatList, TextInput, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/MyStyles';
import NavigationService from '../services/NavigationService';
import { editItem } from '../redux/actions';
import getElementByID from '../utils/utility';

class EditItem extends Component {
	constructor(props) {
		super(props);
		this.id = this.props.id;
		this.oldText = this.props.oldText;
		this.parentID = this.props.parentID;
		this.parElem = getElementByID(this.props.lists, this.parentID);
		this.elem = getElementByID(this.parElem.items, this.id);
		this.state = {
			text: this.oldText
		}
	}
	render() {
		return (
			<View style={styles.centered}>
				<TextInput style={{borderColor: 'black', borderWidth: 2, height: 40, width: 160}}
					onChangeText={(text) => this.setState({text: text})} maxLength={100} value={this.state.text} />
				<TouchableOpacity style={styles.button} onPress={() => {
					this.props.editItem(this.id, this.parentID, this.state.text);
					NavigationService.navigate('ListView', {id: this.parentID})
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
	editItem: (id) => {
		dispatch(editItem(id));
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItem)
