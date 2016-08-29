/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../index.d.ts"/>
var items: NodeRequire = require('../../resources/mocks/items.json');

export class ItemsMocks {
    static $inject = ['$httpBackend', 'AppSettings'];
    constructor($httpBackend: any, AppSettings: any){
        $httpBackend.whenGET(AppSettings.apiUrl + 'items.json').respond(items);
    }
}