// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'monospaced.elastic'])

.filter('capitalize', function() {
    function capWord(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
    return function(input, isEveryWord) {
        return (!input) ? '' : (!isEveryWord) ? capWord(input) : input.replace(/([^\W_]+[^\s-]*) */g, capWord);
    };
})

.directive('display', function (details) {
    var len =  details.pictures.length;
    if (len === 1) {
        var more = document.getElementById("more");
        more.style = "display:none";
    }
    else {
        var one = document.getElementById("one");
        one.style = "display:none";
        for (var i = 0 ; i < len; i++) {
            var div = document.createElement("div");
            div.class = "picture-project-item";
            var img = document.createElement("img");
            img.src = "details.pictures[i]";
            div.appendChild(src);
            more.appendChild(div);
        }
    }
})

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

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
      })

    //.state('tab.dash', {
    //    url: '/dash',
    //    views: {
    //        'tab-dash': {
    //            templateUrl: 'templates/dash/tab-dash.html',
    //            controller: 'DashCtrl'
    //        }
    //    }
    //})

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

        .state('tab.alterPersonal', {
            url:'/personal/alterPersonal',
            views: {
                'tab-personal': {
                    templateUrl:'templates/personal/alterPersonal.html',
                    controller:'AlterPersonalCtrl'
                }
            }
        })

    .state('tab.set', {
        url: '/personal/set',
        views: {
            'tab-personal': {
                templateUrl: 'templates/personal/set.html',
                controller:'SetCtrl'
            }
        }
    })
        .state('login', {
            url:'/login',
            templateUrl: 'templates/personal/login.html',
            controller:'LoginCtrl'
        })

        .state('regist', {
            url:'/regist',
            templateUrl: 'templates/personal/regist.html',
            controller:'RegistCtrl'
        })
      //state后的路由名字必须要在抽象视图的名字之后写，如:tab.collect-list。url
      //后的内容必须写出抽象视图外的完整路径。如果需要在视口中显示则需要声明view
      //对象，并在对象中声明视口对象。
      //.state('tab.collect-list', {
      //    url: '/personal/collect-list', 
      //    views: {
      //        'tab-personal': {
      //            templateUrl: 'templates/collect/collect-list.html',
      //            controller: 'CollectCtrl'
      //        }
      //    }
      //})
      .state('collect-list', {
          url: '/collect-list',
          templateUrl: 'templates/collect/collect-list.html',
          controller: 'CollectCtrl'
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

    .state('tab.message-detail', {
        url: '/message/:manyId',
        views: {
            'tab-message': {
                templateUrl: 'templates/message/message-detail.html',
                controller: 'MessageDetailCtrl'
            }
        }
    })

    .state('buy', {
        url: '/buy',
        templateUrl: 'templates/buyAndSell/buy-list.html',
        controller: 'BuyCtrl'
    })

    //.state('regist', {
    //    url: '/regist',
    //    templateUrl: 'templates/personal/regist.html'
    //})

    //.state('login', {
    //    url: '/login',
    //    templateUrl: 'templates/personal/login.html',
    //    controller:'LoginCtrl'
    //})

     //这个state要放在所有state的最后，应为/:thingid会匹配所有的脱离tab的页面，如:url:'/buy',从而造成路由错误。
     .state('dash-detail', {
         url: '/:thingId',
         templateUrl: 'templates/dash/dash-detail.html',
         controller: 'DashDetailCtrl'
     })
    $urlRouterProvider.otherwise('/tab/life');

});