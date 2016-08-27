export class LocalizationService {
    private _LOCALIZATIONS: any[];
    private currentLocalization: string;
    static $inject = ['$translate', 'AppSettings', '$rootScope', 'tmhDynamicLocale', '$timeout', '$filter', '$state', '$log'];
    constructor(private $translate: any, private AppSettings: any, private $rootScope: any, tmhDynamicLocale: any, $timeout: any, private $filter: any, $state: any, private $log: any) {
        this._LOCALIZATIONS = AppSettings.localizations;
        if (!this._LOCALIZATIONS || this._LOCALIZATIONS.length === 0) {
            $log.debug('Localizations are not defined.');
        }

        let currentLocalization = $translate.proposedLanguage(); // because of async loading

        // EVENTS
        $rootScope.$on('$translateChangeSuccess', function (event: any, data: any) {
            $rootScope.translateChangeSuccess = data;
            document.documentElement.setAttribute('lang', data.language);// sets "lang" attribute to html
            tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));// load Angular locale
        });

        $rootScope.$on('$localeChangeSuccess', function () {
            $rootScope.localeChangeSuccess = true;
            $timeout(function(){
                $rootScope.hideLoading = true;
                $rootScope.$emit('$switchLoading', {status: true});
                $rootScope.pageTitle = $translate.instant($state.current.title);
            }, 200);
        });
    }

    validateLocalizations (localization: string) {
        return this.$filter('filter')(this._LOCALIZATIONS, {code: localization}, true);
    }

    set(localization: string) {

        if (!this.validateLocalizations(localization)) {
            this.$log.debug('Localization name "' + localization + '" is invalid.');
            return;
        }

        if(this.currentLocalization !== localization){
            this.$rootScope.$emit('$switchLoading', {status: false});
            this.currentLocalization = localization;
            this.$translate.use(localization);
        }

        return this.currentLocalization;
    }

    get() {
        return this._LOCALIZATIONS;
    }

    getCurrent() {
        return this.currentLocalization;
    }
}