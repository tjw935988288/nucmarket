angular.module('starter.routes', [])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
      })

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
                controller: 'DashDetailCtrl'
            }
        }
    })

    .state('tab.dash-life', {
        url: '/life',
        views: {
            'tab-dash': {
                templateUrl: 'templates/dash/dash-life.html',
                controller: 'DashLifeCtrl'
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
                  controller: 'PublishCtrl'
              }
          }
      })

      .state('tab.personal', {
          url: '/personal',
          views: {
              'tab-personal': {
                  templateUrl: 'templates/personal/tab-personal.html',
                  controller: 'PersonalCtrl'
              }
          }
      })

      .state('tab.message', {
          url: '/message',
          views: {
              'tab-message': {
                  templateUrl: 'templates/message/message-list.html',
                  controller: 'MessageListCtrl'
              }
          }
      })

    $urlRouterProvider.otherwise('/tab/dash');

});