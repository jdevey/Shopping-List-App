import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';

import styles from '../styles/MyStyles';

export default class ShowAll extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.centered}>
                <Text>This is the show all!</Text>
            </View>
        )
    }
}
