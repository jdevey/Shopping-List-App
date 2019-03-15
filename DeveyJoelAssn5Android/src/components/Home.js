import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

import styles from '../styles/MyStyles';
import navigationService from '../services/NavigationService';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.centered}>
                <Text style={{fontSize: 24}}>This is home!</Text>
                <TouchableOpacity onPress={() => this.props.funcs.changeState({type: 'GO_ADD_LIST'})}><Text>Make a list!</Text></TouchableOpacity>
            </View>
        )
    }
}
