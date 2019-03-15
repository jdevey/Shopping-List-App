import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//import store from './redux/ReduxStore'; // TODO implement store
import navigationService from './services/NavigationService';
import styles from './styles/MyStyles';

import AddIcon from './components/AddIcon';
import AddItem from './components/AddItem';
import CreateList from './components/CreateList';
import Home from './components/Home';
import ShowAll from './components/ShowAll';
import ShowList from './components/ShowList';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("aaa");
    this.state = {
      screen: 'Home',
      listID: 0,
      itemID: 0,
      nextListID: 0,
      nextItemID: 0,
      lists: []
    }
    this.getState = this.getState.bind(this);
    this.changeState = this.changeState.bind(this);
    //this.switchScreen = this.switchScreen.bind(this);
    this.reduce = this.reduce.bind(this);
    this.funcs = {
      getState: this.getState,
      changeState: this.changeState,
      switchScreen: this.switchScreen
    }
  }

  render() {
    switch(this.state.screen) {
      case 'AddIcon':
        return (<AddIcon funcs={this.funcs} listID={this.state.listID}/>);
      case 'AddItem':
        return (<AddItem funcs={this.funcs}/>);
      case 'CreateList':
        return (<CreateList funcs={this.funcs} />);
      case 'Home':
        return (<Home funcs={this.funcs} />);
      case 'ShowAll':
        return (<ShowAll funcs={this.funcs} />);
      case 'ShowList':
        return (<ShowList funcs={this.funcs} listID={this.state.listID}/>);
    }
  }

  getState() {
    return this.state;
  }

  changeState(action) {
    this.setState(this.reduce(action));
  }
/*
  switchScreen(id, listID = -1, itemID = -1) {
    this.setState((prevState) => {
      return (
        {
          screen: id,
          nextListID: prevState.nextListID,
          nextItemID: prevState.nextItemID,
          lists: prevState.lists
        }
      )
    })
  }
*/
  reduce(action) {
    state = this.state;
    switch (action.type) {
        case 'GO_HOME':
            return {
                screen: 'Home',
                listID: state.listID,
                itemID: itemID,
                nextListID: state.nextListID,
                nextItemID: state.nextItemID,
                lists: state.lists
            }
        case 'GO_ADD_LIST':
            return {
                screen: 'ShowList',
                listID: state.listID,
                itemID: state.itemID,
                nextListID: state.nextListID,
                nextItemID: state.nextItemID,
                lists: state.lists
            }
        case 'ADD_LIST':
            return {
                screen: 'ShowList',
                listID: state.listID + 1,
                itemID: state.itemID,
                nextListID: state.nextListID + 1,
                nextItemID: state.nextItemID,
                lists: [...state.lists, new List(state.nextListID, action.name, action.icon, action.date)]
            }
        case 'ADD_ITEM':
            let newLists = [];
            for (l in state.lists) {
                if (l.id == action.parentID) {
                    let innerList = [...l.items, new Item(state.nextItemID, action.parentID, action.text)];
                    newLists.push(new List(l.id, l.name, l.icon, l.date, innerList));
                }
                else {
                    newLists.push(l);
                }
            }
            return {
                screen: 'ShowList',
                listID: state.listID,
                itemID: state.itemID,
                nextListID: state.nextListID,
                nextItemID: state.nextItemID + 1,
                lists: newLists
            }
        case 'DELETE_LIST':
            return state; // TODO make it so the one list is removed
        default:
            console.log("Watch out! You reached the default case in your reducer");
            return state;
    }
  }
}
