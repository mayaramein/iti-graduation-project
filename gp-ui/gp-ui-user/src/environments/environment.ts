// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:4200/',
  ApiUrl: 'http://localhost:3000/',
  securityApiUrl: 'https://localhost:7248/api/',
  companyApiUrl: 'https://localhost:7248/api/Company',
  advertisementApiUrl: 'https://localhost:7248/api/Advertisement',
  chatApiUrl: 'https://localhost:7248/api/Chat',
  userApiUrl: 'https://localhost:7248/api/User',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
