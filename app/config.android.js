
const deeplinksConfig = {}

export const dbConfig = {
    DB_VERSION_KEY: 'loadedVersion',
    CURRENT_DB_VERSION: 1,
    PURGE_DATA: false,
    RESTART_NEEDED: false,

}

export const networkConfig = {
    BASE_URL: 'http://178.128.208.15:8000',
    APPEND_BASE_PATH:'/auth/v1/',  
    DEFAULT_TIMEOUT: 20000,
    securityEnabled: true,
    defaultHeaders: {
        'Content-Type': 'application/json',
    },
    customerIdPrefix: "C-",
    // appName:"CCD",
    authToken: "" 
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


