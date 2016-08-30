/// <reference path="../../typings/index.d.ts"/>
/// <reference path="../../typings.d.ts"/>

require ('../modules/items/items_css.js');
require ('../modules/items/items_tpl.js');
import {ItemsCtrl} from '../modules/items/itemsCtrl.ts';

angular.module('itemsModule', []);
angular.module('itemsModule').controller('ItemsCtrl', ItemsCtrl);