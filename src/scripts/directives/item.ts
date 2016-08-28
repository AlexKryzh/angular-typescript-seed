export class ItemDrct implements ng.IDirective{
    restrict= 'E';
    scope= { data: '=', switchFavorite: '=' };
    templateUrl= 'directives/item.html';

    constructor(private $log: any){}

    link($scope) {}

    static factory(): ng.IDirectiveFactory {
        const directive = ($log: any) => new ItemDrct($log);
        directive.$inject = ['$log'];
        return directive;
    }
}