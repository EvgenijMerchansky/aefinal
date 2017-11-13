class Model {
    constructor(state = []) {
        this._state = state;
        this.sort = false;
    }

    setItem (data) {

        this._state = this._state.concat(data);

        return this._state;
    }

    editItem (ItemId, editingField, query) {

        this._state.forEach(elem => {
            if (+ItemId === elem.id) {
                elem[editingField] = query;
            }
        });

        console.log(this._state, 'STATE');
    }

    sortItems (sortBy) {

        let query = sortBy.toLowerCase();

        if (this.sort === false) {

            function compare (a, b) {
                if (a[query] < b[query])
                    return -1;

                if (a[query] > b[query])
                    return 1;
            }

            this._state.sort(compare);

            this.sort = true;

        } else {

            this.sort = false;
            this._state.reverse();
        }

        return this._state;
    }
}

export default Model;



