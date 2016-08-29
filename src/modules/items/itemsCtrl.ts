export class ItemsCtrl {
    static $inject = ['$scope',  '$rootScope', '$stateParams', '$state', '$log'];
    constructor($scope: any,  $rootScope: any, $stateParams: any, $state: any, $log: any){
        let CurrentPage = parseInt($stateParams.page, 10);

        $scope.CurrentPage = CurrentPage<1 || isNaN(CurrentPage)?1:CurrentPage;

        $scope.emitEvent = function(event: any, args: any){
            $rootScope.$emit(event, args);
        };

        var sorts =  [
            {
                label: 'default',
                expression: false,
                reverse: false
            },
            {
                label: 'title_asc',
                expression: 'title',
                reverse: true
            },
            {
                label: 'title_desc',
                expression: 'title',
                reverse: false
            },
            {
                label: 'description_asc',
                expression: 'description',
                reverse: true
            },
            {
                label: 'description_desc',
                expression: 'description',
                reverse: false
            },
            {
                label: 'email_asc',
                expression: 'email',
                reverse: true
            },
            {
                label: 'email_desc',
                expression: 'email',
                reverse: false
            },
            {
                label: 'price_highest',
                expression: 'price',
                reverse: true
            },
            {
                label: 'price_lowest',
                expression: 'price',
                reverse: false
            }
        ];

        $scope.options = {
            filter: '',
            alert: {
                type: 'info',
                text: 'directives.items.loading'
            },
            sorts: sorts,
            sort: sorts[0]
        };
    }
}