//this is requied in angular typings, but we will not use jQuery
interface JQueryStatic {}
interface Window { app: any; }

declare module NodeJS  {
    interface Global {
        tools: any
    }
}

declare namespace angular.ui  {
    interface IState {
        title: string
    }
}