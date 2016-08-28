export class FilterOptionsDrct implements ng.IDirective{
    restrict= 'E';
    scope= { reloadItems: '=', switchFavoritesList: '=', options: '=' };
    templateUrl= 'directives/filter-options.html';

    constructor(private $log: any){}

    link($scope) {}

    static factory(): ng.IDirectiveFactory {
        const directive = ($log: any) => new FilterOptionsDrct($log);
        directive.$inject = ['$log'];
        return directive;
    }
}