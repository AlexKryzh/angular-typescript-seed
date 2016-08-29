export class PaginationDrct implements ng.IDirective{
    restrict= 'E';
    scope= { currentPage: '=', pages: '=', lastPage: '=', setPage: '=' };
    templateUrl= 'directives/pagination.html';

    constructor(private $log: any){}

    link($scope: any) {}

    static factory(): ng.IDirectiveFactory {
        const directive = ($log: any) => new PaginationDrct($log);
        directive.$inject = ['$log'];
        return directive;
    }
}