declare module NodeJS  {
    interface Global {
        gulp: any,
        plugin: any,
        cachebust: any,
        prod: boolean,
        mocks: boolean,
        config: any,
        bs: any,
        del: any,
        timestamp: any
    }
}