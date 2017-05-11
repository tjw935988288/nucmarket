angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, Chats) {
    $scope.headers = [0, 1, 2, 3];
    $scope.things = Chats.all();
})

.controller('DashDetailCtrl', function ($scope, $stateParams, Chats, Details,$ionicPopup) {
    $scope.thing = Chats.get($stateParams.thingId);
    $scope.display = Details.hideOrShow();
    //使用$on监听事件的刚加载执行的方法
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });
    $scope.notAdd = true;
    $scope.addCollection = function (goodsId) {
        Details.collect(goodsId).then(function () {
            var hintPopup = $ionicPopup.prompt({
                title: '<strong>success</strong>'
            });
            $scope.judge = false;
        }, function () {
            var hinitPopup = $ionicPopup.alert({
                title: '<strong>please check internet</strong>'
            });
        })
    }
})

.controller('DashLifeCtrl', function ($scope,Chats) {
    $scope.things = Chats.all();
})

.controller('DashStudyCtrl', function ($scope, GoodsInformations,$ionicLoading) {
    //GoodsInformations.getGoodsInformations().then(function (data) {
    //    $scope.goodsInformations = data;
    //});
    $ionicLoading.show();
    //currentPageInde的值代表当前页，haveData的值代表后端是否还有数据，pageLoading的值不知道
    $scope.scollData = { currentPageIndex: 1, haveData: true, pageLoading: true };
    $scope.judgeOnload;
    $scope.judgeTip;
    $scope.reOnload = function () {
        GoodsInformations.getGoodsInformations($scope.scollData.currentPageIndex, 10).then(function (data) {

            //if (data == null) {
            //    $state.go("tab.news-unsucess");
            //}
            $scope.goodsInformations = data;
            $scope.scollData.pageLoading = false;
            $scope.judgeOnload = true;
            $scope.judgeTip = false;
            $ionicLoading.hide();
            console.log(data);
            //$timeout(function () {
            //    ionicMaterialMotion.fadeSlideIn({
            //        selector: '.animate-fade-slide-in .item'
            //    });
            //}, 200);
        }, function () {
            $scope.judgeOnload = false;
            $scope.judgeTip = true;
            $ionicLoading.hide();
        });
    }
    //载入study页面时先执行getGoodsInformations方法获取信息
    GoodsInformations.getGoodsInformations($scope.scollData.currentPageIndex, 10).then(function (data) {

        //if (data == null) {
        //    $state.go("tab.news-unsucess");
        //}
        $scope.goodsInformations = data;
        $scope.scollData.pageLoading = false;
        $scope.judgeOnload = true;
        $scope.judgeTip = false;
        $ionicLoading.hide();
        console.log(data);
        //$timeout(function () {
        //    ionicMaterialMotion.fadeSlideIn({
        //        selector: '.animate-fade-slide-in .item'
        //    });
        //}, 200);
    }, function () {
        $scope.judgeOnload = false;
        $scope.judgeTip = true;
        $ionicLoading.hide();
    });
    $scope.doRefresh = function () {
        $scope.scollData.currentPageIndex = 1;
        GoodsInformations.getGoodsInformations($scope.scollData.currentPageIndex, 10).then(function (data) {
            $scope.goodsInformations = data;
            $scope.$broadcast('scroll.refreshComplete');
            //$timeout(function () {
            //    ionicMaterialMotion.fadeSlideIn({
            //        selector: '.animate-fade-slide-in .item'
            //    });
            //}, 200);
        });
    }
    $scope.loadMore = function () {
        if ($scope.scollData.pageLoading) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
        else {
            $scope.scollData.currentPageIndex += 1;
            GoodsInformations.getGoodsInformations($scope.scollData.currentPageIndex, 10).then(function (data) {
                //if (data == null || data.length == 0) {
                //    $scope.scollData.haveData = false;
                //    return;
                //} else $scope.scollData.haveData = true;
                $scope.scollData.havaData = true;
                $scope.goodsInformations = $scope.goodsInformations.concat(data);
                $scope.$broadcast('scroll.infiniteScrollComplete');
                //$timeout(function () {
                //    ionicMaterialMotion.fadeSlideIn({
                //        selector: '.animate-fade-slide-in .item'
                //    });
                //}, 200);
            }, function () {
                $scope.scollData.havaData = false;
            });
        }
    }
})

.controller('BuyCtrl', function ($scope) {
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });
})

.controller('CollectCtrl', function ($scope, Chats) {
    $scope.things = Chats.all();
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });
})

.controller('DashSportsCtrl', function ($scope) {
    
})

.controller('DashPlayCtrl', function ($scope) {
   
})

.controller('DashIonicCtrl', function ($scope) {
    
})

.controller('PersonalCtrl', function ($scope, $ionicPopover) {
    $scope.judge = true;
    $ionicPopover.fromTemplateUrl('/templates/personal/loginRegistPopover.html', {
        scope: $scope
    }).then(function (popover) {
        $scope.popover = popover;
    })
    $scope.openPopover = function ($event) {
        $scope.popover.show($event);
    }
    $scope.closePopover = function () {
        $scope.popover.hide();
    }
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    })
})

//$scope对象的属性名不能为messages,angularjs不仅模块之间存在依赖关系，模块与模块之下的服务也存在依赖关系，类似于一个树型结构，父模块是根，之后是子模块，之后是子模块之下的服务
//所以存在模块层级和服务层级两个级别，兄弟模块的服务互相可见，所以兄弟服务的变量也相互可见，在Messages服务中创建了一个变量messages，在MessageListCtrl中引入Messages服务，
//则对messages变量MessageListCtrl是可见的。所以$scope中的属性不能命名为messages。
.controller('MessageListCtrl', function ($scope, Messages, $ionicPopup) {
    $scope.manys = Messages.all();
    $scope.popupMessageOpthins = function (many) {
        //$scope.popup.index = $scope.messages.indexOf(many);
        $scope.popup.optionsPopup = $ionicPopup.show({
            templateUrl: "templates/message/popup.html",
            scope: $scope,
        });
        $scope.popup.isPopup = true;
    };
})

.controller('PublishCtrl', function ($scope, Camera) {
    //$scope.restNumber = 140 - $scope.number.length;
    $scope.surplus = function () {
        return 140 - $scope.data.content.length;
    };
    $scope.data = { title: '', contents: '',price:'', pic: ['', '', '', '', ''],classify:'' };
    //getPicture函数只能一张一张的上传
    $scope.getPicture = function (id, type) {
        Camera.getPicture(type).then(function (imageURI) {
            $scope.data.pic[id] = imageURI;
        }, function (err) {
            console.log(error);
        });
    };
    //$scope.publish = function () {
    //    var checkTitle = $scope.data.title != '';
    //    var checkContents = $scope.data.contents != '';
    //    var checkPic = false;
    //    //如果检测到有图片上传成功，将checkPic设置为true
    //    angular.forEach($scope.data.pic, function (item) { if (item != '') checkPic = true; });
    //    //最终的检查结果是上传图片或者内容并且上传标题
    //    var checked = checkTitle && (checkPic || checkContents);

    //    if (!checked) {
    //        $ionicPopup.alert({
    //            title: 'iNUC 爱中北',
    //            template: "新闻标题和内容必须输入！"
    //        }).then(function (res) {
    //            return;
    //        });
    //    } else {
    //        var confirmPopup = $ionicPopup.confirm({
    //            title: '<strong>iNUC 爱中北</strong>',
    //            template: '是否确定发布新闻?',
    //            okText: '确定',
    //            cancelText: '取消'
    //        });
	//		//then方法的第一个参数只要弹出框关闭就执行，res参数是弹出框中的输入值
    //        confirmPopup.then(function (res) {
    //            if (res) {
    //                $ionicLoading.show();
    //                //这里函数是检测数据是否上传成功
    //                GoodsInformation.publish($scope.data).then(
    //                    function () {
    //                        $ionicLoading.hide();
    //                        $ionicPopup.alert({
    //                            title: 'iNUC 爱中北',
    //                            template: "新闻发布成功，请等待审核！"
    //                        });
    //                        $state.go('tab.news', {}, { reload: true });
    //                    }, function () {
    //                        $ionicLoading.hide();
    //                        $ionicPopup.alert({
    //                            title: 'iNUC 爱中北',
    //                            template: "新闻发布失败，请重新上传！"
    //                        });
    //                    });
    //            }
    //        });
    //    }
    //}
})

.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('MessageDetailCtrl', function ($scope, $stateParams, Messages) {
    $scope.message = Messages.get($stateParams.manyId);
    $scope.messages = Messages.getMessages($stateParams.manyId);
    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
        viewData.enableBack = true;
    });
    ////当用户发送消息时，
    //$scope.isSendSuccess = false;
    //$scope.send_content;
    ////
    //$scope.allMessages = new Array();
    ////点击用户头像时，通过$stateParams将用户Id获取。
    //$scope.allMessages.push({ userId: $stateParams.manyId, send_content: $scope.send_content});
    //console.log(allMessages);
    //$scope.sendMessage = function () {
    //    Messages.sendMessage(userId, message).then(function (data) {
    //        $scope.isSendSuccess = true;
    //    })
    //}
})

.controller('LoginCtrl', function ($scope, Users, $ionicHistory, $state, $stateParams, $ionicLoading) {
    $scope.loginData = {};
    $scope.doLogin = function () {
        $ionicLoading.show();
        //login中的resolve和reject函数相当于是两个监听函数，当触发时，then中对应的方法执行，并不是调用then中的方法
        Users.login($scope.loginData.username, $scope.loginData.password)
        .then(function (data) {
            $ionicLoading.hide();
            console.log(data);
            if ($ionicHistory.backView()) {
                $ionicHistory.goBack();
            } else {
                $state.go('tab.personal');
            }
        }, function () {
            //navigator.notification.alert('您输入的用户名和密码不正确', function () { }, '登陆', '重新输入');
            console.log('error');
            $ionicLoading.hide();
        });
    }
});