/// <reference path="../../typings/index.d.ts"/>
/// <reference path="../index.d.ts"/>

import * as angular from 'angular';
import 'angular-ui-router';
import 'oclazyload';
import 'angular-translate';
import 'angular-sanitize';
import 'angular-cookies';
import 'angular-dynamic-locale';
import 'angular-translate-loader-static-files';
import 'angular-translate-storage-local';
import 'angular-translate-storage-cookie';
import 'angular-translate-handler-log';
import './app_tpl';
import './filters';
import './controllers';
import './services';
import './directives';

import {Constants} from './settings/constants';
import {Run} from './settings/run';
import {Config} from './settings/config';

// if (constants.mocks === true) {
//     require ('./mocks');
// }

namespace App {
    // create and bootstrap application
    const requires:string[] = [
        'ui.router',
        'oc.lazyLoad',
        'pascalprecht.translate',
         'ngSanitize',
        'ngCookies',
        'tmh.dynamicLocale',
        'app.templates',
        'app.filters',
        'app.controllers',
        'app.services',
        'app.directives'
    ];

    // //activate mocks
    // if (constants.mocks === true) {
    //     requires.push('app.mocks');
    // }

    // mount on window for testing
    window.app = angular.module('app', requires);

    let AppSettings = new Constants();
    angular.module('app').constant('AppSettings', AppSettings);
    angular.module('app').config(Config);
    angular.module('app').run(Run);

    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
}