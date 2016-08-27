/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../index.d.ts"/>

import { LanguagesDrct } from './languages'; 
export let app_directives = angular.module('app.directives', []);
app_directives.directive('languages', LanguagesDrct.factory());