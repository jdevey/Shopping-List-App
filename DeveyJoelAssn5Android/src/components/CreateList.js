import React, { Component } from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/MyStyles';
import List from '../models/List';
import {addList} from '../redux/actions';  //TODO make this


export default class CreateList extends Component {
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
                <Text>List icon url: </Text>
                <TextInput style={{borderColor: 'black', borderWidth: 2, height: 40, width: 160}} onChangeText={(text) => this.setState({icon: text})} maxLength={100} value={this.state.url} />
                <TouchableOpacity onPress={() => {
                        this.props.funcs.changeState(addList(this.state.name, this.state.url, new Date().toDateString()));
                        //this.props.funcs.switchScreen('ShowList');
                    }}>
                    <Text>Create!</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.funcs.changeState({type: 'GO_HOME'})}}><Text>Cancel</Text></TouchableOpacity>
            </View>
        )
    }
}
