/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../index.d.ts"/>

const bulk = require('bulk-require');
const services = bulk(__dirname, ['./**/!(*index|*.spec).js']);
export let app_services = angular.module('app.services', []);

function declare(serviceMap: any) {
  Object.keys(serviceMap).forEach((key) => {
    let item = serviceMap[key];

    if (!item) {
      return;
    }

    if (item.fn && typeof item.fn === 'function') {
      app_services.service(item.name, item.fn);
    } else {
      declare(item);
    }
  });
}

declare(services);