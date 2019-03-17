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
	switch (action.type) {
		case 'CREATE_LIST':
			return {
				nextListID: state.nextListID + 1,
				nextItemID: state.nextItemID,
				lists: [...state.lists, new List(state.nextListID, action.name, action.icon, action.date)]
			}
		case 'CREATE_ITEM':
			return {
				nextListID: state.nextListID,
				nextItemID: state.nextItemID + 1,
				lists: state.lists.map(l => l.id == action.parentID ? 
					{
						id: l.id,
						name: l.name,
						icon: l.icon,
						date: l.date,
						items: [...l.items, new Item(state.nextItemID, action.parentID, action.text)]
					} :
					l
				)
			}
		case 'EDIT_LIST':
			return {
				nextListID: state.nextListID,
				nextItemID: state.nextItemID,
				lists: state.lists.map(l => l.id == action.id ?
					{
						id: l.id,
						name: action.newName,
						icon: l.icon,
						date: l.date,
						items: l.items
					} :
					l
				)
			}
		case 'EDIT_ITEM':
			return {
				nextListID: state.nextListID,
				nextItemID: state.nextItemID,
				lists: state.lists.map(l => l.id == action.parentID ?
					{
						id: l.id,
						name: l.name,
						icon: l.icon,
						date: l.date,
						items: l.items.map(it => it.id == action.id ?
							{
								id: it.id,
								parentID: it.parentID,
								text: action.newText,
								done: it.done
							} :
							it
						)
					} :
					l
				)
			}
		case 'DELETE_LIST':
			
			return {
				nextListID: state.nextListID + 1,
				nextItemID: state.nextItemID,
				lists: state.lists.filter(l => l.id != action.id)
			}
		case 'DELETE_ITEM':
			return {
				nextListID: state.nextListID,
				nextItemID: state.nextItemID,
				lists: state.lists.map(l => l.id == action.parentID ?
					{
						id: l.id,
						name: l.name,
						icon: l.icon,
						date: l.date,
						items: l.items.filter(l => l.id != action.id)
					} :
					l
				)
			}
		case 'TOGGLE_ITEM':
			return {
				nextListID: state.nextListID,
				nextItemID: state.nextItemID,
				lists: state.lists.map(l => l.id == action.parentID ?
					{
						id: l.id,
						name: l.name,
						icon: l.icon,
						date: l.date,
						items: l.items.map(it => it.id == action.id ?
							{
								id: it.id,
								parentID: it.parentID,
								text: it.text,
								done: !it.done
							} :
							it
						)
					} :
					l
				)
			}
		default:
			console.log("You reached the default case in your reducer!");
			return state;
	}
}
