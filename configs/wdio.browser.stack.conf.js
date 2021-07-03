const {config} = require('./wdio.shared.conf');

//Passing browser stack credentials directly

// config.user='harish333';
// config.key='3Bqjzpy1zzL3YVCHhwKQ';

//Passing browser stack credentials via environment variables

    config.user= process.env.BROWSERSTACK_USERNAME;
    config.key= process.env.BROWSERSTACK_ACCESS_KEY;



// ============
// Capabilities
// ============
config.capabilities = [
    // Chrome example
    {
        maxInstances: 5,
        browserName: 'chrome',
        browserVersion: '89.0',
        acceptInsecureCerts: true
    },
    {
        maxInstances: 5,
        browserName: 'firefox',
        browserVersion: 'latest'
    },
];
// config.services = config.services.concat('browserstack');

exports.config = config;
