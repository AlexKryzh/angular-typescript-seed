/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../index.d.ts"/>

const bulk = require('bulk-require');
const directives = bulk(__dirname, ['./**/!(*index|*.spec).js']);
export let app_directives = angular.module('app.directives', []);

function declare(directiveMap: any) {
  Object.keys(directiveMap).forEach((key) => {
    let item = directiveMap[key];

    if (!item) {
      return;
    }

    if (item.fn && typeof item.fn === 'function') {
      directives.directive(item.name, item.fn);
    } else {
      declare(item);
    }
  });
}

declare(directives);