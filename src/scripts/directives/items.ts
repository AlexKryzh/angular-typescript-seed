export class ItemsDrct implements ng.IDirective{
    restrict= 'E';
    scope= { itemsApi: '=', step: '=', currentPage: '=', showPages: '=', options: '=', emitEvent: '='  };
    templateUrl= 'directives/items.html';

    constructor(private ItemsService: any, private PaginationService: any, private $state: any, private $anchorScroll: any, private $filter: any, private $log: any){}

    link($scope: any) {
        var getPagination = () => {
            var items = this.$filter('fields')($scope.items, $scope.options.filter, ['title', 'description', 'email', 'price']);
            var pagination = this.PaginationService.get(items, $scope.currentPage, $scope.step, $scope.showPages);
            $scope.pages = pagination.pages;
            $scope.lastPage = pagination.last_page;
        };

        $scope.setPage = (id: number) => {
            $scope.currentPage = id > 0 ? id : 1;
            getPagination();
            this.$anchorScroll();
        };

        $scope.reloadItems = () =>{
            var id= 1;
            this.$state.transitionTo(this.$state.current, {page: id}, {notify: false});
            $scope.setPage(id);
        };

        $scope.switchFavorite = (item: any) => {
            item.favorite = item.favorite? false : true;
        };

        $scope.switchFavoritesList = () => {
            $scope.ShowFavorites = !$scope.ShowFavorites;
            $scope.emitEvent('$switchPageScroll', { status: $scope.ShowFavorites? true : false });
        };

        this.ItemsService.get($scope.itemsApi).then(function(data: any){
            var items = data.items;
            if(items.length === 0){
                $scope.options.alert = {
                    type: 'warning',
                    text: 'directives.items.empty'
                };
            }else{
                angular.forEach(items, function(item, key) {
                    //ensure that price is integer
                    items[key].price = parseInt(item.price, 10);
                });
                $scope.items = items;
                getPagination();
            }
        }, function(error: any){
            //we can use error for details
            $scope.options.alert = {
                type: 'danger',
                text: 'directives.items.error'
            };
        });
    }

    static factory(): ng.IDirectiveFactory {
        const directive = (ItemsService: any, PaginationService: any, $state: any, $anchorScroll: any, $filter: any, $log: any) => new ItemsDrct(ItemsService, PaginationService, $state, $anchorScroll, $filter, $log);
        directive.$inject = ['ItemsService', 'PaginationService', '$state', '$anchorScroll', '$filter', '$log'];
        return directive;
    }
}


//         link: function ($scope) {


//         }
//     };
// }

