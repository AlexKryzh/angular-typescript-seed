export class LanguagesDrct implements ng.IDirective{
    restrict= 'E';
    replace= true;
    templateUrl= 'directives/languages.html';

    constructor(private LocalizationService: any){}

    link($scope: any){
        let that = this;
        $scope.languages = this.LocalizationService.get();
        $scope.current = this.LocalizationService.getCurrent();
        $scope.changeLanguage = function (locale: any) {
            $scope.current = that.LocalizationService.set(locale);
            $scope.switchNav(false);
        };
    }

    static factory(): ng.IDirectiveFactory {
        const directive = (LocalizationService: any) => new LanguagesDrct(LocalizationService);
        directive.$inject = ['LocalizationService'];
        return directive;
    }
}