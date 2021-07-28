class Store {
    static load() {
        let storage;
        if(localStorage.getItem('storage') === null) {
            storage = [];
        } else {
            storage = JSON.parse(localStorage.getItem('storage'));
        }
        return storage;
    }

    static add(info) {
        // load storage
        const storage = Store.load();
        // update location
        storage.pop(); storage.push(info);
        // set LS
        localStorage.setItem('storage',JSON.stringify(storage));
    }

    static display() {
        // load storage
        const storage = Store.load();
        // update UI
        const ui = new UI();
        if(storage.length !== 0) ui.insertInfo(storage[0]);
    }

    static isEmpty() {
        // load storage
        const storage = Store.load();
        // check if empty
        return (storage.length === 0);
    }
}