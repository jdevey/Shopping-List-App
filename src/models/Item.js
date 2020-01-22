export default class Item {
	constructor(id, parentID, text) {
		this.id = id;
		this.parentID = parentID;
		this.text = text;
		this.done = false;
	}
}
