declare module NodeJS  {
    interface Global {
        gulp: any,
        plugin: any,
        cachebust: any,
        prod: boolean,
        mocks: boolean,
        config: object,
        bs: any,
        del: any,
        timestamp: any
    }
}