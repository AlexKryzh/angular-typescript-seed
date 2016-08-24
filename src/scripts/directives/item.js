function ItemDrct($log) {
    return {
        restrict: 'E',
        scope: { data: '=', switchFavorite: '=' },
        templateUrl: 'directives/item.html',
        link: function($scope){

        }
    };
}

export default {
  name: 'item',
  fn: ItemDrct
};
