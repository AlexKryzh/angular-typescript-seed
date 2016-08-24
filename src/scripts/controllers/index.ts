/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../index.d.ts"/>

// const bulk = require('bulk-require');
// const controllers = bulk(__dirname, ['./**/!(*index|*.spec).js']);
// export let app_controllers = angular.module('app.controllers', []);

// function declare(controllerMap: any) {
//     Object.keys(controllerMap).forEach((key) => {
//         let item = controllerMap[key];

//         if (!item) {
//             return;
//         }

//         if (item.fn && typeof item.fn === 'function') {
//             app_controllers.controller(item.name, item.fn);
//         } else {
//             declare(item);
//         }
//     });
// }

// declare(controllers);
// 

import { FooterCtrl } from './footerCtrl'; 
export let app_controllers = angular.module('app.controllers', []);
app_controllers.controller('FooterCtrl', FooterCtrl);