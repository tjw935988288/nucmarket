angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, Chats) {
    $scope.headers = [0, 1, 2, 3];
    $scope.things = Chats.all();

})

.controller('DashDetailCtrl', function ($scope,$stateParams,Chats) {
    $scope.thing = Chats.get($stateParams.thingId);
})

.controller('DashLifeCtrl', function ($scope) {
})

.controller('DashStudyCtrl', function ($scope) { })

.controller('DashSportsCtrl', function ($scope) { })

.controller('DashPlayCtrl', function ($scope) { })

.controller('DashIonicCtrl', function ($scope) { })

.controller('PersonalCtrl', function ($scope) { })

.controller('TalkingCtrl', function ($scope) { })

.controller('PublishCtrl', function ($scope) {
    $scope.number = "";
    $scope.surplus = function () {
        return 140 - $scope.number.length;
    };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
