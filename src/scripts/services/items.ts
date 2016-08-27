export class ItemsService {
    static $inject = ['$http', 'AppSettings', '$log'];
    constructor(public $http: ng.IHttpService, public AppSettings: any, public $log: any) {}
    get(itemsApi: string){
        var promise = this.$http({
            method: 'GET',
            url: this.AppSettings.apiUrl + itemsApi
        }).then(function (response) {
            return response.data;
        });
        return promise;
    }
}