/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../../typings.d.ts"/>

import { AppLoadingDrct } from './app-loading';
import { DefaultImageDrct } from './default-image';
import { FavoriteItemsDrct } from './favorite-items';
import { FilterOptionsDrct } from './filter-options';
import { ItemDrct } from './item';
import { ItemsDrct } from './items';
import { LanguagesDrct } from './languages';
import { PaginationDrct } from './pagination'; 
export let app_directives = angular.module('app.directives', []);
app_directives.directive('appLoading', AppLoadingDrct.factory());
app_directives.directive('defaultImage', DefaultImageDrct.factory());
app_directives.directive('favoriteItems', FavoriteItemsDrct.factory());
app_directives.directive('filterOptions', FilterOptionsDrct.factory());
app_directives.directive('item', ItemDrct.factory());
app_directives.directive('items', ItemsDrct.factory());
app_directives.directive('languages', LanguagesDrct.factory());
app_directives.directive('pagination', PaginationDrct.factory());