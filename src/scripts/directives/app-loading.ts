export class AppLoadingDrct implements ng.IDirective{
    templateUrl= 'directives/app-loading.html';

    static factory(): ng.IDirectiveFactory {
        const directive = () => new AppLoadingDrct();
        return directive;
    }
}