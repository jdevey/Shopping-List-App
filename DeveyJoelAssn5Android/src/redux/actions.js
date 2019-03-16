export function createList(name, icon, date) {
	return {
		type: 'ADD_LIST',
		name: name,
		icon: icon,
		date: date
	}
}

export function createItem(parentID, text) {
	return {
		type: 'ADD_ITEM',
		parentID: parentID,
		text: text
	}
}

export function editList(id, newName) {
	return {
		type: 'EDIT_LIST',
		id: id,
		newName: newName
	}
}

export function editItem(id, parentID, newText) {
	return {
		type: 'EDIT_ITEM',
		id: id,
		parentID: parentID,
		newText: newText
	}
}

export function deleteList(id) {
	return {
		type: 'DELETE_LIST',
		id: id
	}
}

export function deleteItem(id, parentID) {
	return {
		type: 'DELETE_ITEM',
		id: id,
		parentID: parentID
	}
}

export function toggleItem(id, parentID) {
	return {
		type: 'TOGGLE_ITEM',
		id: id,
		parentID: parentID
	}
}
