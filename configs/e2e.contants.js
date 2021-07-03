// export default {
//      URL: 'http://demo.guru99.com/test/newtours/index.php',
//      PAGE_TITLE: 'Login: Mercury Tours'
//
// }

export const DEFAULT_TIMEOUT = 30000;
export const URLS = {
     MERCURY_TOURS_URL: 'http://demo.guru99.com/test/newtours/index.php',
};

export const MERCURY_TOURS_PAGE_TITLE= 'Login: Mercury Tours';
export const PRODUCTS = {
     BIKE_LIGHT: 0,
     BOLT_SHIRT: 1,
     ONE_SIE: 2,
     TATT_SHIRT: 3,
     BACKPACK: 4,
     FLEECE_JACKET: 5,
};
export const LOGIN_USERS = {
     DEFAULT: {
          username: 'mercury',
          password: 'mercury',
     },
     NO_MATCH: {
          username: 'd',
          password: 'd',
     },
     NO_USER_DETAILS: {
          username: '',
          password: '',
     },
     NO_PASSWORD: {
          username: 'standard_user',
          password: '',
     },
     PERFORMANCE: {
          username: 'performance_glitch_user',
          password: 'secret_sauce',
     },
     STANDARD: {
          username: 'standard_user',
          password: 'secret_sauce',
     },
};