export default class List {
	constructor(id, name, icon, date, items = []) {
		this.id = id;
		this.name = name;
		this.icon = icon;
		this.date = date;
		this.items = items;
	}
}
