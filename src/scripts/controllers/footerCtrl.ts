export class FooterCtrl {
    name: string;

    static $inject = ['$scope'];
    constructor(private $scope: any) {
        this.name = 'FooterCtrl';
        $scope.date = new Date();
    }
}