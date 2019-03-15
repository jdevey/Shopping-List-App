function addList(name, icon, date) {
    return {
        type: 'ADD_LIST',
        name: name,
        icon: icon,
        date: date
    }
}

function addItem(parentID, text) {
    return {
        type: 'ADD_ITEM',
        parentID: parentID,
        text: text
    }
}

function goHome() {
    return {
        type: 'GO_HOME',
    }
}