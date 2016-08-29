/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../index.d.ts"/>
import 'angular-mocks';
import {Constants} from '../settings/constants';
let AppSettings = new Constants();
export let app_mocks: any = null;
import { LanguagesMocks } from './languages';
import { ItemsMocks } from './items';
if (AppSettings.mocks === true) {
    app_mocks = angular.module('app.mocks', ['ngMockE2E']);
    app_mocks.run(LanguagesMocks);
    app_mocks.run(ItemsMocks);
 }