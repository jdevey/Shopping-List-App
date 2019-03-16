import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import store from './redux/store';
import NavigationService from './services/NavigationService';
import styles from './styles/MyStyles';

import CreateIcon from './components/CreateIcon';
import CreateItem from './components/CreateItem';
import CreateList from './components/CreateList';
import EditItem from './components/EditItem';
import EditList from './components/EditList';
import Home from './components/Home';
import ListView from './components/ListView';

const TopLevelNavigator = createStackNavigator(
	{
        CreateIcon: CreateIcon,
        CreateItem: CreateItem,
		CreateList: CreateList,
		EditItem: EditItem,
		EditList: EditList,
        Home: Home,
        ListView: ListView
    },
    {
		initialRouteName: 'Home',
		initialRouteParams: {} //TODO add start props
    }
);

const AppContainer = createAppContainer(TopLevelNavigator);
	
export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppContainer
					ref={navigatorRef => {
						NavigationService.setTopLevelNavigator(navigatorRef);
					}}
				/>
			</Provider>
		)
	}
}
