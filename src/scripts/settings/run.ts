export class Run {
    static $inject = ['$rootScope', '$translate', '$log'];
    constructor($rootScope: any, $translate: ng.translate.ITranslateService, $log: ng.ILogService){
        //Switch body scroll
        $rootScope.$on('$switchPageScroll', (event: any, args: any) => {
            $rootScope.hidePageScroll  = args.status;
        });

        //Switch general loading
        $rootScope.$on('$switchLoading', (event: any, args: any) => {
            $rootScope.hideLoading  = args.status;
            $rootScope.hidePageScroll  = !args.status;
        });

        //Switch menu navigation
        $rootScope.switchNav = function(status = !$rootScope.openNav){
            $rootScope.openNav = status;
        };

        //change page based on state
        $rootScope.$on('$stateChangeSuccess', (event: any, toState: any) => {

            //page config
            $rootScope.page = {
                state: {
                    name: toState.name
                }
            };

            //hide menu
            $rootScope.switchNav(false);

            if(toState.title){
                $rootScope.pageTitle = $translate.instant(toState.title);
                //$rootScope.pageTitle += ' \u2014 ';
            }

            //investigate this for jQueryLite
            //var $html = angular.element(document).find('html');

        });
    }
}