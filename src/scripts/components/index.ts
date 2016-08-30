/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../../typings.d.ts"/>

import { FooterDateComponent } from './footer'; 
export let app_components = angular.module('app.components', []);
app_components.component('footerDate', new FooterDateComponent());