/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../index.d.ts"/>

const bulk = require('bulk-require');
const filters = bulk(__dirname, ['./**/!(*index|*.spec).js']);
export let app_filters = angular.module('app.filters', []);

function declare(filterMap: any) {
  Object.keys(filterMap).forEach((key) => {
    let item = filterMap[key];

    if (!item) {
      return;
    }

    if (item.fn && typeof item.fn === 'function') {
      app_filters.filter(item.name, item.fn);
    } else {
      declare(item);
    }
  });
}

declare(filters);