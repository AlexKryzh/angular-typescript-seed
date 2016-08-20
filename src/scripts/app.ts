/// <reference path="../../typings/index.d.ts"/>
/// <reference path="../index.d.ts"/>


import * as angular from 'angular';
import {Run} from './settings/run';
import {Config} from './settings/config';

// import constants     from './settings/constants';
// import onConfig      from './settings/config';
// import 'angular-sanitize';
// import 'angular-cookies';
// import 'angular-ui-router';
// import 'angular-dynamic-locale';
// import 'angular-translate';
// import 'angular-translate-loader-static-files';
// import 'angular-translate-storage-local';
// import 'angular-translate-storage-cookie';
// import 'angular-translate-handler-log';
// import 'oclazyload';
// import './app_tpl';
// import './filters';
// import './controllers';
// import './services';
// import './directives';

// if (constants.mocks === true) {
//     require ('./mocks');
// }

const requires:string[] = [];


// // create and bootstrap application
// const requires = [
//     'ngSanitize',
//     'ngCookies',
//     'tmh.dynamicLocale',
//     'ui.router',
//     'pascalprecht.translate',
//     'app.templates',
//     'app.filters',
//     'app.controllers',
//     'app.services',
//     'app.directives',
//     'oc.lazyLoad'
// ];

// //activate mocks
// if (constants.mocks === true) {
//     requires.push('app.mocks');
// }

namespace App {
    let OnRun:any = new Run();
    let OnConfig:any = new Config();

    // mount on window for testing
    window.app = angular.module('app', requires);
    // angular.module('app').constant('AppSettings', constants);
    angular.module('app').config(OnConfig);
    angular.module('app').run(OnRun);

    // angular.bootstrap(document, ['app'], {
    //     strictDi: true
    // });
}