export class DefaultImageDrct implements ng.IDirective{
    scope= {};

    constructor(private $log: any){}

    link(scope, element, attrs){
        element.bind('error', function() {
            if (attrs.src !== attrs.defaultImage) {
                attrs.$set('src', attrs.defaultImage);
                scope.src = attrs.defaultImage;
            }
        });
    }

    static factory(): ng.IDirectiveFactory {
        const directive = ($log: any) => new DefaultImageDrct($log);
        directive.$inject = ['$log'];
        return directive;
    }
}