/// <reference path="../../../typings/index.d.ts"/>
/// <reference path="../../../typings.d.ts"/>

export class FooterDateComponent implements ng.IComponentOptions {
    controller: Function = FooterDateComponentController;
    template: string = `{{$ctrl.date | date}}, SiteName`;
}

class FooterDateComponentController {
    date: any
    constructor() {
        this.date = new Date();
    }
}