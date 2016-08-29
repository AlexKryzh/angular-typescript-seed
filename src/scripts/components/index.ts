/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../index.d.ts"/>

import { FooterDateCmp } from './footer'; 
export let app_components = angular.module('app.components', []);
app_components.component('footerDate', FooterDateCmp);