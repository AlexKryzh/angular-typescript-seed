/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../../typings.d.ts"/>

import { ItemsService } from './items';
import { LocalizationService } from './localization';
import { PaginationService } from './pagination';
export let app_services = angular.module('app.services', []);
app_services.service('ItemsService', ItemsService);
app_services.service('LocalizationService', LocalizationService);
app_services.service('PaginationService', PaginationService);