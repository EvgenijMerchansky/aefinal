import { stopSubmiting, sortViewState, createElement, checkValidUser, makeError } from '../helpers';
import { Controller } from '../controller';

class View extends Controller {
    constructor() {
        super();
        this._cahsingDom = document;
        this._form = this._cahsingDom.getElementById('form');
        this._errorBlock = this._cahsingDom.getElementById('error-block');
        this._button = this._cahsingDom.getElementById('send-data');
        this.tableButtons = this._cahsingDom.querySelectorAll('.table-btn');
        this.addHandlers();
    }

    addHandlers () {
        const { _form, _button, _errorBlock, tableButtons } = this;

        _form.addEventListener('submit', stopSubmiting);

        _button.addEventListener('click', () => {
            let response = checkValidUser(_form);

            if (response === -1) {
                makeError(_errorBlock);

            } else if (response === '') {
                let data = super.updateModel(_form),
                    changeInput = createElement(data),
                    toArr = Array.prototype.slice.call(changeInput.children),
                    toCleanFields = Array.prototype.slice.call(_form.children);

                toArr.forEach(elem => {

                    if (elem.className === 'for-sort') {
                        this.changeInput(elem);
                    }
                });

                toCleanFields.forEach(elem => {
                    if (elem.localName !== 'input') return;

                    elem.value = '';
                });
            }
        });

        tableButtons.forEach((elem) => {
            elem.addEventListener('click', () => {
                let fieldName = elem.attributes[0].nodeValue,
                    newState = super.sortModel(fieldName);

                sortViewState(newState);
            });
        });
    }
    changeInput (inputsBlock) {

        const toArr = Array.prototype.slice.call(inputsBlock.children);

        toArr.forEach((elem) => {

            let input = elem.firstElementChild;
            input.oninput = () => {
                super.updateModelField(input.id, input.className, input.value);
            }

        })

    }
}

export default View;