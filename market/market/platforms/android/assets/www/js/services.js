var _host = "http://59.48.248.41:1020/iNUC";
var _url = _host + "/api/interface";
var _token = _host + "/Token";

angular.module('starter.services', [])

.value('details',{
    id: 1,
    name: 'Ben Sparrow',
    things: 'iphone',
    lastText: 'You on your way?',
    pictures: ['img/ben.png', 'img/max.png', 'img/mike.png', 'img/perry.png']
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    getBuyInfo: function ($http,$q) {
        var deferred = $q.defer();
        $http.get(_url + '/GetPictureNews?pageSize=5', {})
        .success(function (data) {
            deferred.resolve(data);
        }).error(function (data) {
            deferred.reject(data);
        });
        return deferred.promise;
    }
  };
})

.factory('Details', function ($http,$q) {
    var details = {
        id: 1,
        name: 'Ben Sparrow',
        things: 'iphone',
        lastText: 'You on your way?',
        pictures: ['img/ben.png']
    };
    var len = details.pictures.length;
    var judge;

    return {
        len: function () {
            return len;
        },
        hideOrShow: function () {
            if (len === 1) {
                judge = true;
            }
            else judge = false;
            return judge;
        },
        displayInScroll: function () {
            for (var i = 0 ; i < len; i++) {
                var div = document.createElement("div");
                div.class = "picture-project-item";
                var img = document.createElement("img");
                img.src = "details.pictures[i]";
                div.appendChild(src);
                more.appendChild(div);
            } 
        },
        //collect: function (goodsId) {
        //    var defered = $q.defer();
        //    $http.post(_url + '/addCollection', { goodsId: goodsId })
        //    .success(function (success) {
        //        defered.resolve(success);
        //    })
        //    .error(function (error) {
        //        defered.reject(error);
        //    });
        //    return defered.promise;
        //}
    };
})

.factory('Messages', function ($http, $q) {
    var messages = [{
        id: 1,
        name: "curry",
        pic: "img/ben.png",
        lastMessage: {
            originalTime: "2015-11-26 5:22:55",
            time: "",
            timeFrome1970: 0,
            content: "play basketball?",
            isFromeMe: false
        },
        noReadMessages: 5,
        showHints: true,
        isTop: 0,
        message: [{
            isFromeMe: false,
            content: "hello!",
            time: "2015-11-22 08:50:22"
        }, {
            isFromeMe: true,
            content: "hello,who are you?",
            time: "2015-11-22 08:51:02"
        }, {
            isFromeMe: false,
            content: "let's play basketball?",
            time: "2015-11-26 5:22:55"
        }]
    }, {
        id: 7,
        name: "潘敏",
        pic: "img/max.png",
        lastMessage: {
            originalTime: "2015-11-22 15:34:55",
            time: "",
            timeFrome1970: 0,
            content: "我就在软件园?",
            isFromeMe: false
        },
        noReadMessages: 0,
        showHints: false,
        isTop: 0,
        message: [{
            isFromeMe: false,
            content: "你好!",
            time: "2015-11-22 08:50:22"
        }, {
            isFromeMe: true,
            content: "你好, 你是谁?",
            time: "2015-11-22 08:51:02"
        }, {
            isFromeMe: false,
            content: "我就在软件园?",
            time: "2015-11-22 15:34:55"
        }]
    }, {
        id: 2,
        name: "王振启",
        pic: "img/mike.png",
        lastMessage: {
            originalTime: "2015-11-21 15:34:55",
            time: "",
            timeFrome1970: 0,
            content: "周末有什么安排?",
            isFromeMe: false
        },
        noReadMessages: 20,
        showHints: true,
        isTop: 0
    }, {
        id: 6,
        name: "mike",
        pic: "img/perry.png",
        lastMessage: {
            originalTime: "2014-10-12 15:34:55",
            time: "",
            timeFrome1970: 0,
            content: "ok",
            isFromeMe: false
        },
        noReadMessages: 0,
        showHints: false,
        isTop: 0
    }];

    //var messages = [{
    //    id: 0,
    //    name: 'Ben Sparrow',
    //    lastText: 'You on your way?',
    //    face: 'img/ben.png'
    //}, {
    //    id: 1,
    //    name: 'Max Lynx',
    //    lastText: 'Hey, it\'s me',
    //    face: 'img/max.png'
    //}, {
    //    id: 2,
    //    name: 'Adam Bradleyson',
    //    lastText: 'I should buy a boat',
    //    face: 'img/adam.jpg'
    //}, {
    //    id: 3,
    //    name: 'Perry Governor',
    //    lastText: 'Look at my mukluks!',
    //    face: 'img/perry.png'
    //}, {
    //    id: 4,
    //    name: 'Mike Harrington',
    //    lastText: 'This is wicked good ice cream.',
    //    face: 'img/mike.png'
    //}];
    return {
        all: function () {
            return messages;
        },
        get: function (manyId) {
            for (var i = 0; i < messages.length; i++) {
                if (messages[i].id === parseInt(manyId)) {
                    return messages[i];
                }
            }
            return null;
        },
        getMessages: function (manyId) {
            for (var i = 0; i < messages.length; i++) {
                if (messages[i].id === parseInt(manyId)) {
                    return messages[i].message;
                }
            }
        },
        sendMessage: function (userId,message) {
            var defered = $q.defer();
            var date = new Date(); //注意日期的格式问题
            $http.post(_url + '/SendMessage?userId=' + userId + '&message=' + message + '&date=' + date+'&isFromMe=true', {})
            .success(function (data) {
                defered.resolve(data);
            })
            .error(function (data) {
                defered.reject(data);
            })
        },
        getMessage: function (userId, message, date) {
            var defered = $q.defer();
            $http.get(_url + '/GetMessage?userId=' + userId + '&message=' + message + '&date=' + date, {})
            .success(function (data) {
                defered.resolve(data);
            })
            .error(function (data) {
                defered.reject(data);
            })
        },
        //先建立服务器连接,当用户点击聊天对象头像时，获取该用户的ID，并建立与该用户的连接
        initLink: function () {
            var ws = new WebSocket('ws://localhost:8181');
            ws.onopen = function (event) {
                console.log('connnect success');
            }
            ws.onmessage = function (event) {
                var data = JSON.parse(event.data);
            }
        }
    };
})

.factory('Users', function ($http, $q) {
    var storeToken = function (username, token, tags, personnelPicture) {
        localStorage.setItem('username', username);
        localStorage.setItem('tags', tags);
        localStorage.setItem('token', token);
        localStorage.setItem('personnelPicture', personnelPicture);
    }
    return {
        //登陆时客户端向服务器发送一个post请求，请求中携带着用户名和密码,并请求服务器返回一个token，当用户名和密码验证成功后，就回在本地保存token，当用户请求数据时，把token发送出去，来验证用身份
        //登陆其实就是请求服务器返回一个token
        login: function (username, password) {
            var deferred = $q.defer();
            //$http返回一个promise对象
            $http({
                method: 'post', //method的值可以是get/delete/head/jsonp/post/put
                url: _token, //绝对或相对的请求目标
                data: "username=" + username + "&password=" + password + "&grant_type=password", //data的值包含了将会被当作消息体发送给服务器的对象，一般在post请求中使用
                headers: {'content-Type':'application/x-www-form-urlencoded'} //额外的请求头
            })
            .success(function (data) {
                storeToken(username, data.access_token, data.Tags, data.personnelPicture);
                deferred.resolve(name);
            }).error(function (data) {
                deferred.reject(data);
            })
            return deferred.promise;
        },

        checkLogin: function () {
            if (localStorage.getItem('username') != null) { return true };
            return false;
        },

        getUserName: function () {
            return localStorage.getItem('username');
        },

        getPicture: function () {
            return localStorage.getItem('personnelPicture');
        },

        logOut: function () {
            localStorage.clear();
        },

        register: function (username, password, code, nickname, sex) {
            var deferred = $q.defer();
            $http.post(_url + '/CreateUser', { mobilephone: username, password: password, code: code, nickname: nickname, sex: sex })
            .success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
        getVerificationCode: function (username) {
            var deferred = $q.defer();
            $http.post(_url + '/GetVerificationCode', { mobilephone: username })
            .success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
        getCollection: function (pageIndex,pageSize) {
            var deferred = $q.defer();
            $http.get(_url + '/GetCommoditiesByFavorite?pageIndex='+pageIndex+'&pageSize='+pageSize)
            .success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        }
    }
})

.factory('GoodsInformations', function ($http,$q) {
    return {
        getGoodsInformations: function (label,title, pageIndex, pageSize) {
            var deferred = $q.defer();
            $http.get(_url + '/GetCommodities?label=&title=&pageIndex='+pageIndex+'&pageSize='+pageSize, {})
            .success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });
            //promise = $q.when(config);
            return deferred.promise;
        },
        getGoodsDetail: function (thingId) {
            var deferred = $q.defer();
            $http.get(_url + '/GetCommodity?id=' + thingId, {})
            .success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
        //publish: function (data) {
        //    var fileTransfer = new FileTransfer();
        //    var options = new FileUploadOptions();
        //    options.fileKey = "file";
        //    options.mimeType = "image/jpeg";
        //    var targetPath = _host + '/File/UploadImage';

        //    var defs = [];

        //    var s = '';
        //    angular.forEach(data.pic, function (item) {
        //        if (item) {
        //            var deferred = $q.defer();
        //            options.fileName = item.substr(item.lastIndexOf('/') + 1);
        //            fileTransfer.upload(item, targetPath, function (success) {
        //                s += success.response.substring(2);
        //                deferred.resolve(success);
        //            }, function (error) {
        //                deferred.reject(error);
        //            }, options);
        //            defs.push(deferred.promise);
        //        }
        //    });

        //    var deferred = $q.defer();
        //    $q.all(defs).then(
        //        function (success) {
        //            $http.post(_url + '/PublishNews', { title: data.title, contents: data.contents + s, picCode: '' })
        //            .success(function (success) {
        //                deferred.resolve(success);
        //            }).error(function (error) {
        //                deferred.reject(error);
        //            });
        //        },
        //        function (error) {
        //            deferred.reject(error);
        //        });
        //    return deferred.promise;
        //}
        publish: function (data) {
            var fileTransfer = new FileTransfer();
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.mimeType = "image/jpeg";
            var targetPath = _host + '/File/UploadImage';

            var defs = [];
            var s = [];
            angular.forEach(data.pic, function (item) {
                if (item) {
                    var deferred = $q.defer();
                    //从imageURI中返回image的名字。
                    options.fileName = item.substr(item.lastIndexOf('/') + 1);
                    var prex = 'src="';
                    var start, end;
                    //上传文件的四个参数，图片的URI，服务器的上传接口，成功回掉函数和错误回调函数。
                    fileTransfer.upload(item, targetPath, function (success) {
                        //如果成功上传，则将文件的名字push到s数组中
                        start = success.response.indexOf(prex) + prex.length;
                        end = success.response.indexOf('"', start);
                        var src = success.response.substring(start, end);
                        var img = '<img ' + src + ' />';
                        //这里push到数组s中的应该是类似与src=“{图片}”这样的数据。
                        s.push(img);
                        deferred.resolve(success);
                    }, function (error) {
                        deferred.reject(error);
                    }, options);
                    defs.push(deferred.promise);
                }
            });
            var deferred = $q.defer();
            $q.all(defs).then(
                function (success) {
                    $http.post(_url + '/PublishCommodity', { title: data.title, description: data.description, price: data.price, contact: data.contact,picture:s,piccode:'', labels: data.labels, newness:'', maxCount:'', place:'', tradeEndTime: data.tradeEndTime})
                    .success(function (success) {
                        deferred.resolve(success);
                    }).error(function (error) {
                        deferred.reject(error);
                    });
                },
                function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        },
        collect: function (goodsId) {
            var deferred = $q.defer();
            $http.post(_url + '/AddCommodityFavorite?id=' + goodsId)
            .success(function (data) {
                deferred.resolve(data);
            }).error(function (error) {
                deferred.reject(error);
                console.log(error);
            });
            return deferred.promise;
        }
        }
    }
)

.factory('Camera',function ($q) {
    return {
        //从本地或相机中获取图片
        getPicture: function (type, width, height) {
            //如果不设置照片的宽高，默认照片的宽高为800，600
            if (!width) width = 800;
            if (!height) height = 600;
            var options;
            //通过type来判断是拍照上传图片还是通过相册上传图片
            if (type === 1) options = {
                quality: 75,
                sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
                allowEdit: true,
                targetWidth: width,
                targetHeight: height,
                saveToPhotoAlbum: true
            };
            else options = {
                quality: 75,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: true,
                targetWidth: width,
                targetHeight: height,
                saveToPhotoAlbum: false
            };
            var q = $q.defer();
            //navigator是cordova插件的一个对象，引入cordova插件后可以直接使用
            navigator.camera.getPicture(function (result) {
                q.resolve(result);
            }, function (err) {
                q.reject(err);
            }, options);

            return q.promise;
        }
    }
})

//.factory('GoodsInformation', function ($http,$q) {
//    return {
//        publish: function (data) {
//            //首先调用cordava的文件传输类
//            var fileTransfer = new FileTransfer();
//            var options = new FileUploadOptions();
//            options.fileKey = "file";
//            options.mimeType = "image/jpeg";
//            var targetPath = _host + '/File/UploadImage';

//            var defs = [];

//            var s = '';
//            //foreach函数第二个参数方法中的参数item存放第一个参数的值
//            angular.forEach(data.pic, function (item) {
//                if (item) {
//                    var deferred = $q.defer();
//                    options.fileName = item.substr(item.lastIndexOf('/') + 1);
//                    fileTransfer.upload(item, targetPath, function (success) {
//                        s += success.response.substring(2);
//                        deferred.resolve(success);
//                    }, function (error) {
//                        deferred.reject(error);
//                    }, options);
//                    defs.push(deferred.promise);
//                }
//            });

//            var deferred = $q.defer();
//            $q.all(defs).then(
//                function (success) {
//                    $http.post(_url + '/PublishCommodity', { Title: data.title, Description: data.description + s, Price: data.price, Contact: '', Picture: '', PicCode: '', Labels: 'data.labels', Newness: '', MaxCount: '', Place: '', TradeEndTime: '' })
//                    .success(function (success) {
//                        deferred.resolve(success);
//                    }).error(function (error) {
//                        deferred.reject(error);
//                    });
//                },
//                function (error) {
//                    deferred.reject(error);
//                });
//            return deferred.promise;
//        },
//    }
//})

//.factory('Messages', function ($websocket) {
//    //建立webSocket连接，定义collection变量存放消息数据。
//    var ws = $websocket('ws://echo.websocket.org/');
//    var collection = [];

//    ws.onMessage(function (event) {
//        console.log('message: ', event);
//        var res;
//        try {
//            res = JSON.parse(event.data);
//        } catch (e) {
//            res = { 'username': 'anonymous', 'message': event.data };
//        }

//        collection.push({
//            username: res.username,
//            content: res.message,
//            timeStamp: event.timeStamp
//        });
//    });

//    ws.onError(function (event) {
//        console.log('connection Error', event);
//    });

//    ws.onClose(function (event) {
//        console.log('connection closed', event);
//    });

//    ws.onOpen(function () {
//        console.log('connection open');
//        ws.send('Hello World');
//        ws.send('again');
//        ws.send('and again');
//    });
//    // setTimeout(function() {
//    //   ws.close();
//    // }, 500)

//    return {
//        collection: collection,
//        status: function () {
//            return ws.readyState;
//        },
//        send: function (message) {
//            if (angular.isString(message)) {
//                ws.send(message);
//            }
//            else if (angular.isObject(message)) {
//                ws.send(JSON.stringify(message));
//            }
//        }

//    };
//})

.factory('Talkings', function ($http, $q) {
    return {
        remark: function (talkingID, remarks, imei) {
            var deferred = $q.defer();
            $http.post(_url + '/AddTalkingRemark', { talkingID: talkingID, remarks: remarks, imei: imei })
            .success(function (success) {
                deferred.resolve(success);
            }).error(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        },
        getTalkings: function (pageIndex, pageSize) {
            var deferred = $q.defer();
            $http.get(_url + '/GetTalkings?pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&remarksPageIndex=1&remarksPageSize=100', {})
            .success(function (data) {
                deferred.resolve(data);
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        }
    }
})