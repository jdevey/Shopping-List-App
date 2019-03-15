import React from 'react';

import { createAppContainer, createStackNavigator, NavigationActions } from 'react-navigation';

import AddIcon from '../components/AddIcon';
import AddItem from '../components/AddItem';
import CreateList from '../components/CreateList';
import Home from '../components/Home';
import ShowAll from '../components/ShowAll';
import ShowList from '../components/ShowList';

let NavigationService = class NavigationService {

    constructor () {}

    getTopNavigator() {
        console.log("ccc");
        return (
            <TopLevelNavigator ref={navigatorRef => {
                    console.log("aaa ", navigatorRef);
                    this._navigator = navigatorRef;
                }}
            />
        );
    }

    navigate(routeName, params) {
        console.log("bbb ", this._navigator);
        this._navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params
            })
        )
    }
}

const navigationService = new NavigationService();

export default navigationService;

const Root = createStackNavigator(
    {
        AddIcon: AddIcon,
        AddItem: AddItem,
        CreateList: CreateList,
        Home: Home,
        ShowAll: ShowAll,
        ShowList: ShowList
    },
    {
        initialRouteName: 'Home'
    }
)

const TopLevelNavigator = createAppContainer(Root);
