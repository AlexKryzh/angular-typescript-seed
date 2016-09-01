exports.config = {

    allScriptsTimeout: 11000,

    baseUrl: 'http://localhost:3002/',

    directConnect: true,

    capabilities: {
        browserName: 'chrome',
        version: '',
        platform: 'ANY'
    },

    framework: 'jasmine2',

    jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    },

    specs: [
        'protractor/**/*_spec.ts'
    ]

};
