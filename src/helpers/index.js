import { ERROR_TEXT } from '../constants';

export const stopSubmiting = (e) => {
    e.preventDefault();
};

export const sortViewState = (newState) => {
    let sortFields = document.querySelectorAll('.for-sort');

    sortFields.forEach(elem => {
        elem.parentNode.removeChild(elem);
    });

    createElement(newState);
};

export const createElement = (dataArray) => {
    const parrentContainer = document.getElementById('app-child');

    dataArray.forEach(elem => {

        let indicatorHTML = document.getElementById(`${[elem.id]}`);

        if (indicatorHTML) return;

        const tr = document.createElement('tr');

        for (let item in elem) {

            let td = document.createElement('td');
            let input = document.createElement('input');

            input.value = elem[item];
            input.className = item;
            input.id = elem.id;
            tr.className = 'for-sort';
            tr.id = elem.id;

            td.insertBefore(input, null);
            tr.length > 0 ? tr.appendChild(td) : tr.insertBefore(td, null);
            parrentContainer.appendChild(tr);

        }

        return tr;

    });

    return parrentContainer;
};

export const checkValidUser = (form) => {

    const toArr = Array.prototype.slice.call(form.children);
    let error = '';

    toArr.forEach((elem) => {
        if (elem.localName === 'input') {
            if (elem.value === '') {
                error = -1;
            } else {
                error = '';
            }
        }
    });

    return error;
};

export const makeError = (errorContainer) => {

    const errorText = document.createElement('p');

    if (errorContainer.children.length < 1) {

        errorText.textContent = ERROR_TEXT;
        errorContainer.insertBefore(errorText, null);

        setTimeout(() => {
            errorContainer.removeChild(errorText);
        }, 1500);
    }
};