import React from 'react';

import { NavigationActions } from 'react-navigation';

import CreateIcon from '../components/CreateIcon';
import CreateItem from '../components/CreateItem';
import CreateList from '../components/CreateList';
import Home from '../components/Home';
import ListView from '../components/ListView';

let _navigator;

function setTopLevelNavigator(ref) {
	_navigator = ref;
}

function navigate(routeName, params) {
	_navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params
		})
	)
}

export default {
	navigate,
	setTopLevelNavigator
}
