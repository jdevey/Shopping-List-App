import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { connect } from 'react-redux';

import styles from '../styles/MyStyles';
import { createItem } from '../redux/actions';
import getElementByID from '../utils/utility';
import NavigationService from '../services/NavigationService';

class ListView extends Component {

	constructor(props) {
		super(props);
		this.id = this.props.navigation.getParam('id');
		console.log("ccc", this.id)
		this.elem = getElementByID(this.props.lists, this.id);
		console.log("ddd", this.elem)
	}

	renderItem = ({item}) => {
		return (
			<GestureRecognizer
				style={styles.centered}
				onSwipeLeft={() => this.props.deleteItem(item.id, item.parentID)}
				onSwipeRight={() => NavigationService.navigate('EditItem', {id: item.id, parentID: this.elem.id, oldText: item.text})}
			>
				<Text style={{fontSize: 12}}>* {item.text}</Text>
			</GestureRecognizer>
			//TODO implement onClick for toggling "done" boolean
		)
	}

	render() {
		return (
			<View style={styles.centered}>
				<Text style={{fontSize: 24}}>{this.elem.name}</Text>
				<Image source={{uri: this.elem.icon}} style={{height: 100, width: 100}}/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => NavigationService.navigate('CreateItem', {parentID: this.elem.id})}
				>
					<Text>Add Item</Text>
				</TouchableOpacity>
				<FlatList 
					data={this.elem.items}
					keyExtractor={(item, index) => item.id.toString()}
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

export default connect(mapStateToProps)(ListView)
