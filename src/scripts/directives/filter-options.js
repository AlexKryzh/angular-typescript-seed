function FilterOptionsDrct($log) {
    return {
        restrict: 'E',
        scope: { reloadItems: '=', switchFavoritesList: '=', options: '=' },
        templateUrl: 'directives/filter-options.html',
        link: function ($scope) {
            
        }
    };
}

export default {
  name: 'filterOptions',
  fn: FilterOptionsDrct
};
