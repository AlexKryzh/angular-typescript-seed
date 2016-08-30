/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../../typings.d.ts"/>
var en_us: NodeRequire = require('../../resources/translation/en_us.json');
var es_es: NodeRequire  = require('../../resources/translation/es_es.json');

export class LanguagesMocks {
    static $inject = ['$httpBackend'];
    constructor($httpBackend: any){
        $httpBackend.whenGET('resources/translation/en_us.json').respond(en_us);
        $httpBackend.whenGET('resources/translation/es_es.json').respond(es_es);
    }
}