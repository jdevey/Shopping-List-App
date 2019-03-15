import List from '../models/List';
import Item from '../models/Item';

let initialState = {
    nextListID: 0,
    nextItemID: 0,
    lists: []
}

function rdc(state = initialState, action) {
    switch (action.type) {
        case 'ADD_LIST':
            return {
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
                nextListID: state.nextListID,
                nextItemID: state.nextItemID + 1,
                lists: newLists
            }
        default:
            console.log("DUUDE watch out you reached the default case in your reducer");
            return state;
    }
}