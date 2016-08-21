/// <reference path="../../typings/index.d.ts"/>
/// <reference path="../index.d.ts"/>

import * as angular from 'angular';
import 'angular-ui-router';
import 'oclazyload';

import {Run} from './settings/run';
import {Config} from './settings/config';

// import constants     from './settings/constants';
// import 'angular-sanitize';
// import 'angular-cookies';
// import 'angular-dynamic-locale';
// import 'angular-translate';
// import 'angular-translate-loader-static-files';
// import 'angular-translate-storage-local';
// import 'angular-translate-storage-cookie';
// import 'angular-translate-handler-log';
// import './app_tpl';
// import './filters';
// import './controllers';
// import './services';
// import './directives';

// if (constants.mocks === true) {
//     require ('./mocks');
// }

const requires:string[] = [
    'ui.router'
    'oc.lazyLoad'
];


// // create and bootstrap application
// const requires = [
//     'ngSanitize',
//     'ngCookies',
//     'tmh.dynamicLocale',
//     'pascalprecht.translate',
//     'app.templates',
//     'app.filters',
//     'app.controllers',
//     'app.services',
//     'app.directives'
// ];

// //activate mocks
// if (constants.mocks === true) {
//     requires.push('app.mocks');
// }

namespace App {
    // mount on window for testing
    window.app = angular.module('app', requires);
    // angular.module('app').constant('AppSettings', constants);
    angular.module('app').config(Config);
    angular.module('app').run(Run);

    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
}