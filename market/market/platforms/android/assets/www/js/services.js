angular.module('starter.services', [])

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
    }
  };
})

.factory('Details', function () {
    var details = {
        id: 1,
        name: 'Ben Sparrow',
        things: 'iphone',
        lastText: 'You on your way?',
        pictures: ['img/ben.png', 'img/max.png', 'img/mike.png', 'img/perry.png']
    };

    return {
        display: function () {
            var len =  details.face.length;
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
                    img.src = details.pictures[i];
                    //img的class样式还没有设置，还需要完善
                    div.appendChild(src);
                    more.appendChild(div);
                }
            }
        }
    };
})