/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sideload-it',
    environment: environment,
    firebase: 'https://sideloadit.firebaseio.com/',
    torii: {
      sessionServiceName: 'session'
    },
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    googleFonts: [
              'Open+Sans:300',
              'Roboto:300',
              'Oswald:300,400,700',
              'Dosis:200, 300, 400, 600, 800'
            ],
    contentSecurityPolicy: {
        'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com",
        'img-src': "'self' *.twimg.com avatars.githubusercontent.com",
        'font-src': "'self' fonts.gstatic.com",
        'style-src': "'self' fonts.googleapis.com",
        'default-src': "'self' https://www.youtube.com"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
