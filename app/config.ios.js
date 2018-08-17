import Config from 'react-native-config'

const deeplinksConfig = {}

export const dbConfig = {
    DB_VERSION_KEY: 'loadedVersion',
    CURRENT_DB_VERSION: 1,
    PURGE_DATA: false,
    RESTART_NEEDED: false,

}

export const networkConfig = {
    BASE_URL: 'http://www.google.com',
    APPEND_BASE_PATH:'/ccd-api/v1/public',  
    DEFAULT_TIMEOUT: 20000,
    securityEnabled: true,
    defaultHeaders: {
        'Content-Type': 'application/json',
    },
    customerIdPrefix: "C-",
    // appName:"CCD",
    authToken: Config.AUTH_TOKEN_ANDROID //App Token; App version 1.1 
}

export const analyticsConfig = {
}

//Configuration to support autoread of SMS
export const autoReadSMSConfig = {
}


let appConfig = {
    dbConfig,
    networkConfig,
    analyticsConfig,
    autoReadSMSConfig,
    deeplinksConfig,
}
export default appConfig;


