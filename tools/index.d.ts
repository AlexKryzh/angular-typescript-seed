declare module NodeJS  {
    interface Global {
        gulp: any,
        plugin: any,
        prod: boolean,
        mocks: boolean,
        config: object,
        bs: any,
        timestamp: any
    }
}