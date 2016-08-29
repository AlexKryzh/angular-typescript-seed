class FooterDateController {
        static $inject = ['$scope'];
        constructor($scope: any) {
            $scope.date = new Date();
        }
 }

export class FooterDateCmp {
    public controller: any;
    public template: any;
    //public templateUrl: string;
    constructor() {
        this.controller = FooterDateController;
        this.template = '{{date | date}} , SiteName';
        //this.templateUrl = 'some-component.html';
    }
}