const dbConfig = {
    DB_VERSION_KEY: 'loadedVersion',
    CURRENT_DB_VERSION: 1,
    PURGE_DATA: false,
    RESTART_NEEDED: false,

}

const networkConfig = {
    BASE_URL: "http://139.59.118.134:8080",
    APPEND_BASE_PATH:'/ccd-api/v1/public',  
    DEFAULT_TIMEOUT: 20000,
    securityEnabled: true,
    defaultHeaders: {
        'Content-Type': 'application/json',
    },
    customerIdPrefix: "C-",
    authToken: "1428350159860952031" 
}

const analyticsConfig = {
    url:"http://www.google.com",
    authKey:"http://www.google.com",
}

//Configuration to support autoread of SMS
const autoReadSMSConfig = {
    senderAddress:"TESTIN",
    otpPattern: /([\d]{6})/
}

let appConfig = {
    dbConfig,
    networkConfig,
    analyticsConfig,
    autoReadSMSConfig
}
export default appConfig;

