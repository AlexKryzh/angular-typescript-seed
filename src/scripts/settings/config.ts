export class Config {
    static $inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider', '$logProvider', '$translateProvider', 'tmhDynamicLocaleProvider', 'AppSettings'];
    constructor($urlRouterProvider: ng.ui.IUrlRouterProvider, $stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $logProvider: ng.ILogProvider, $translateProvider: ng.translate.ITranslateProvider, tmhDynamicLocaleProvider: ng.dynamicLocale.tmhDynamicLocaleProvider, AppSettings: any){

        //debug logs
        var cache_buster = '';
        if(AppSettings.development){
            $logProvider.debugEnabled(true);
        }else{
            $logProvider.debugEnabled(false);
            cache_buster = '.' + AppSettings.cache_buster;
        }

        //Routes Configuration
        $locationProvider.html5Mode({enabled: true, requireBase: false});

        $stateProvider
        .state('home', {
            url: '/',
            title: 'page.home.title',
            templateUrl: 'home.html',
            resolve: {
                list_deps: ['$ocLazyLoad', function($ocLazyLoad: oc.ILazyLoad){
                    return $ocLazyLoad.load({
                        files: ['/scripts/home.js']
                    });
                }]
            }
        })

        .state('items', {
            url: '/items?page',
            params: { page: '1', squash: true },
            title: 'page.items.title',
            controller: 'ItemsCtrl as items',
            templateUrl: 'items.html',
            resolve: {
                list_deps: ['$ocLazyLoad', function($ocLazyLoad: oc.ILazyLoad){
                    return $ocLazyLoad.load({
                        files: ['/scripts/items.js']
                    });
                }]
            }
        })

        .state('styleguide', {
            url: '/styleguide',
            title: 'page.styleguide.title',
            templateUrl: 'styleguide.html',
            resolve: {
                list_deps: ['$ocLazyLoad', function($ocLazyLoad: oc.ILazyLoad){
                    return $ocLazyLoad.load({
                        files: ['/scripts/styleguide.js']
                    });
                }]
            }
        });

        $urlRouterProvider.otherwise('/');

        //locale
        tmhDynamicLocaleProvider.localeLocationPattern('resources/locale/{{locale}}' + cache_buster + '.js');

        //translations
        //'sanitize' strategy has issues with utf-8 encoding
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

        $translateProvider.useStaticFilesLoader({
            prefix: 'resources/translation/',// path to translations files
            suffix: cache_buster + '.json'// suffix, currently- extension of the translations
        });

        $translateProvider.preferredLanguage(AppSettings.defaultLocalization); // is applied on first load
        $translateProvider.useLocalStorage(); // saves selected language to localStorage

        $translateProvider.useMissingTranslationHandlerLog();
    }
}