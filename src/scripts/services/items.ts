export class ItemsService {
    static $inject = ['$http', 'AppSettings', '$log'];
    constructor(public $http: any, public AppSettings: any, public $log: any) {}
    get(itemsApi: any){
        var promise = this.$http({
            method: 'GET',
            url: this.AppSettings.apiUrl + itemsApi
        }).then(function (response) {
            return response.data;
        });
        return promise;
    }
}