export class FooterCtrl {
    static $inject = ['$scope'];
    constructor(private $scope: any) {
        $scope.date = new Date();
    }
}