class FooterDateController {
        date: any;
        static $inject = ['$scope'];
        constructor($scope: any) {
            this.date = new Date();
        }
 }

export class FooterDateCmp {
    public controller: any;
    public template: any;
    //public templateUrl: string;
    constructor() {
        this.controller = FooterDateController;
        this.template = '$ctrl.date , SiteName';
        //this.templateUrl = 'some-component.html';
    }
}