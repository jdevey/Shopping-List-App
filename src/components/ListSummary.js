import React, {Component} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/MyStyles';
import getElementByID from '../utils/utility';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { deleteList } from '../redux/actions';
import NavigationService from '../services/NavigationService';

class ListSummary extends Component {

	constructor(props) {
		super(props);
		this.id = this.props.id;
		this.elem = getElementByID(this.props.lists, this.id);
	}

	render() {
		return (
			<GestureRecognizer
				style={styles.centered}
				onSwipeLeft={() => this.props.deleteList(this.id)}
				onSwipeRight={() => NavigationService.navigate('EditList', {id: this.elem.id, oldName: this.elem.name})}
			>
				<Text style={{fontSize: 18}}>
					{this.elem.name}
				</Text>
				<Image source={{uri: this.elem.icon}} style={{height: 40, width: 40}}/>
				<Text style={{fontSize: 10}}>
					Created {this.elem.date}
				</Text>
			</GestureRecognizer>
		)
	}
}

//<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} style={{height: 60, width: 40}}/>

const mapStateToProps = state => ({
	lists: state.lists
})

const mapDispatchToProps = dispatch => ({
	deleteList: (id) => {
		dispatch(deleteList(id));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(ListSummary)
