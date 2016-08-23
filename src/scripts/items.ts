/// <reference path="../../typings/index.d.ts"/>
/// <reference path="../index.d.ts"/>

import '../modules/items/items_css.js';
import '../modules/items/items_tpl.js';
import {ItemsCtrl} from '../modules/items/itemsCtrl.ts';

var ItemsModule = angular.module('ItemsModule', []);

ItemsModule.controller('ItemsCtrl', ItemsCtrl);

export default ItemsModule;