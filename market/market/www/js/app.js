// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
.config(['$ionicConfigProvider', function ($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');// other values: top

}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
      })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/dash/tab-dash.html',
                controller: 'DashCtrl'
            }
        }
    })

    .state('tab.dash-detail', {
        url: '/dash/:thingId',
        views: {
            'tab-dash': {
                templateUrl: 'templates/dash/dash-detail.html',
                controller:'DashDetailCtrl'
            }
        }
    })

    .state('tab.dash-life', {
        url: '/life',
        views: {
            'tab-dash': {
                templateUrl:'templates/dash/dash-life.html',
                controller:'DashLifeCtrl'
            }
        }
    })

    .state('tab.dash-study', {
        url: '/study',
        views: {
            'tab-dash': {
                templateUrl: 'templates/dash/dash-study.html',
                controller: 'DashStudyCtrl'
            }
        }
    })

    .state('tab.dash-spotrs', {
        url: '/sports',
        views: {
            'tab-dash': {
                templateUrl: 'templates/dash/dash-sports.html',
                controller: 'DashSportsCtrl'
            }
        }
    })

    .state('tab.dash-play', {
        url: '/play',
        views: {
            'tab-dash': {
                templateUrl: 'templates/dash/dash-play.html',
                controller: 'DashPlayCtrl'
            }
        }
    })

    .state('tab.dash-ionic', {
        url: '/ionic',
        views: {
            'tab-dash': {
                templateUrl: 'templates/dash/dash-ionic.html',
                controller: 'DashIonicCtrl'
            }
        }
    })

      .state('tab.publish', {
          url: '/publish',
          views: {
              'tab-publish': {
                  templateUrl: 'templates/publish/tab-publish.html',
                  controller:'PublishCtrl'
              }
          }
      })
      
      .state('tab.personal', {
          url: '/personal',
          views: {
              'tab-personal': {
                  templateUrl: 'templates/personal/tab-personal.html',
                  controller:'PersonalCtrl'
              }
          }
      })

      .state('talking', {
          url: '/talking',
                  templateUrl: 'templates/talking/dash-talking.html',
                  controller:'TalkingCtrl'
      })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
