import localStorage from './localstorage';

class DataController {
	constructor() {
    }

    changeItem(value) {
        return new Promise((resolve, reject) => {
            localStorage.add('oneItem', value)
            .then(() => {
                resolve();
            })
            .catch(error => {
                console.log('error: ', error)
            })
        })
    }

    getItem() {
        return new Promise((resolve, reject) => {
            localStorage.get('oneItem')
            .then(result => {
                resolve(result);
            })
            .catch(error => reject(error))
        })
    }

    addMany(value) {
        return localStorage.merge('manyItems', value);
    }

    getMany() {
        return new Promise((resolve, reject) => {
            localStorage.get('manyItems')
            .then(result => {
                resolve(result);
            })
            .catch(error => reject(error))
        })
    }

    addItemToMany(key, value) {
        return localStorage.merge('manyItems', {[key]: value});
    }
};

const dataController = new DataController();
export default dataController;
