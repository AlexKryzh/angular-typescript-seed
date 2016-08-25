/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../index.d.ts"/>

import { TrimFilter } from './trim'; 
import { FieldsFilter } from './fields'; 

export let app_filters = angular.module('app.filters', []);

app_filters.filter('trim', TrimFilter);
app_filters.filter('fields', FieldsFilter);