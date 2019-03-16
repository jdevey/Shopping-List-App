import List from '../models/List';
import Item from '../models/Item';

let initialState = {
	nextListID: 0,
	nextItemID: 0,
	lists: []
}
/*
function deepCopy(a) {
	let fullList = []
	for (l in a.lists) {
		let innerList = l.items.map(b => JSON.parse(JSON.stringify(b)))
		fullList.append({
			id: l.id,
			name: l.name,
			icon: l.icon,
			date: l.date,
			items: innerList
		})
	}
	return {nextListID: a.nextListID, nextItemID: a.nextItemID, lists: fullList}
}
*/
function deepCopy(a) {
	return JSON.parse(JSON.stringify(a))
}

export default function(state = initialState, action) {
	let stateCopy = deepCopy(state);
	switch (action.type) {
		case 'ADD_LIST':
			stateCopy.lists.push(new List(stateCopy.nextListID, action.name, action.icon, action.date));
			stateCopy.nextListID++;
			break;
		case 'ADD_ITEM':
			for (l in stateCopy.lists) {
				if (l.id == action.parentID) {
					l.items.push(new Item(stateCopy.nextItemID, action.parentID, action.text));
					break;
				}
			}
			stateCopy.nextItemID++;
			break;
		case 'EDIT_LIST':
			for (l in stateCopy.lists) {
				if (l.id == action.id) {
					l.name = action.newName;
				}
			}
			break;
		case 'EDIT_ITEM':
			found = false;
			for (l in stateCopy.lists) {
				if (l.id == action.parentID) {
					for (it in l.items) {
						if (it.id == action.id) {
							it.text = action.text;
							found = true;
							break;
						}
					}
				}
				if (found) break;
			}
			break;
		case 'DELETE_LIST':
			for (let i = 0; i < stateCopy.lists.length; ++i) {
				if (stateCopy.lists[i].id == action.id) {
					stateCopy.lists.splice(i, 1);
					break;
				}
			}
			break;
		case 'DELETE_ITEM':
			found = false;
			for (l in stateCopy.lists) {
				if (l.id == action.parentID) {
					for (let i = 0; i < l.items.length; ++i) {
						if (l.items[i].id == action.id) {
							l.items.splice(i, 1);
							found = true;
							break;
						}
					}
				}
				if (found) break;
			}
			break;
		case 'TOGGLE_ITEM':
			found = false;
			for (l in stateCopy.lists) {
				if (l.id == action.parentID) {
					for (it in l.items) {
						if (it.id == action.id) {
							it.done = !it.done;
							found = true;
							break;
						}
					}
				}
				if (found) break;
			}
			break;
		default:
			console.log("You reached the default case in your reducer!");
		return stateCopy;
	}
}
/*
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
		case 'EDIT_LIST':
			let newLists = [];
			for (l in state.lists) {
				if (l.id == action.id) {
					newsLists.push(new List(l.id, action.newName, l.icon, l.date, l.items));
				}
				else {
					newLists.push(l);
				}
			}
		case 'EDIT_ITEM':
			let newLists = [];
			for (l in state.lists) {
				if (l.id == action.parentID) {
					let innerList = [];
					for (it in l.items) {
						if (it.id == action.id) {
							it.text = action.text;
						}
					}
				}
			}
		default:
			console.log("DUUDE watch out you reached the default case in your reducer");
			return state;
	}
}
*/
