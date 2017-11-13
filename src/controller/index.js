import Model from '../model';

export class Controller extends Model{
    constructor() {
        super();
    }

    updateModel (collection) {
        let data = {
            name: collection['name'].value,
            lname: collection['lname'].value,
            age: collection['age'].value,
            comment: collection['comment'].value,
            id: Date.now(),
        };

        return super.setItem(data);
    }

    updateModelField (ItemId, fieldName, query) {

        super.editItem(ItemId, fieldName, query)
    }

    sortModel (fieldName) {

        return super.sortItems(fieldName);
    }
}

