'use strict'; module.exports = angular.module('items.templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('items.html','<items items-api="\'items.json\'" step="12" current-page="CurrentPage" options="options" show-pages="5" emit-event="emitEvent"></items>');}]);