export class FavoriteItemsDrct implements ng.IDirective{
    restrict= 'E';
    scope= { items: '=', switchFavoritesList: '=', switchFavorite: '=', options: '=' };
    templateUrl= 'directives/favorite-items.html';

    constructor(private $log: any){}

    link($scope: any) {}

    static factory(): ng.IDirectiveFactory {
        const directive = ($log: any) => new FavoriteItemsDrct($log);
        directive.$inject = ['$log'];
        return directive;
    }
}