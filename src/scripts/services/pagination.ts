export class PaginationService {
    static $inject = ['$log'];

    constructor(public $log: ng.ILogService) {}

    get(items: any[] = [], CurrentPage: number = 1, step: number = 5, ShowPages: number = 3){
        //Force quantity of showed pages to odd number because of design desicion
        ShowPages = ShowPages%2 === 0 ? ShowPages-1 : ShowPages;
        //Force minimun quantity of showed pages to 3
        ShowPages = ShowPages < 3 ? 3 : ShowPages;
        //Force quantity of showed not 
        ShowPages = ShowPages > LastPage ? LastPage : ShowPages;

        var LastPage = Math.ceil(items.length / step);

        let last_page = this.getLastPage(items, step);
        let pages = this.getPages(ShowPages, CurrentPage, last_page);

        return {
            pages: pages,
            last_page: last_page
        };
    }

    getPages(ShowPages: number, CurrentPage: number, LastPage: number){
        var pages = [], StartPage, FinalPage, CurrentStep;
        var PagesStep = (ShowPages - 1) / 2;

        StartPage = CurrentPage - PagesStep;
        FinalPage = CurrentPage + PagesStep;

        if(StartPage < 1){
            StartPage = 1;
            FinalPage = ShowPages;
        }

        if(FinalPage > LastPage){
            StartPage = LastPage - ShowPages +1;
            FinalPage = LastPage;
        }

        for (let i = StartPage; i <= FinalPage; i++) {
            pages.push(i);
        }
        return pages;
    }

    getLastPage(items: any[], step: number){
        return Math.ceil(items.length / step);
    }
}