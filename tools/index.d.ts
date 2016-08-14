declare module NodeJS  {
    interface Global {
        gulp: any,
        plugin: any,
        prod: boolean,
        config: object,
        bs: any
    }
}