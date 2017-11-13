import { Controller } from './controller';
import View from './view';
import Model from './model';

// on load page

document.addEventListener("DOMContentLoaded", () => {
    new Controller();
    new View();
    new Model();

    console.log('all meterials is loaded!');
});



