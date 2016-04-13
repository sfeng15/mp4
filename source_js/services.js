var mp4Services = angular.module('mp4Services', []);

mp4Services.factory('CommonData', function(){
    var data = "";
    return{
        getData : function(){
            return data;
        },
        setData : function(newData){
            data = newData;
        }
    }
});

mp4Services.factory('User', function($http, $window) {
    return {
        get : function() {
            var baseUrl = "http://www.uiucwp.com:4000";
            return $http.get(baseUrl+'/api/users');
        },
        post : function(Name,Email) {
            var baseUrl ="http://www.uiucwp.com:4000";
            //return $http.post(baseUrl+'/api/users',user);
            return $http({
                method:'post',
                url:baseUrl+'/api/users',
                data:{name:Name,email:Email},
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj){
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }
                    return str.join("&");
                }
            });
        },
        getUserMine: function(id) {
            console.log("GETTING USER");
            var baseUrl = "http://www.uiucwp.com:4000";
            return $http.get(baseUrl+'/api/users/'+ id );
        },
        put : function(id,data) {//? not sure about the syntax
            var baseUrl = "http://www.uiucwp.com:4000";
            return $http.put(baseUrl+'/api/users/'+id,data);
            return $http({
                method:'put',
                url:baseUrl+'/api/users',
                data:{name:Name,email:Email},
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj){
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }
                    return str.join("&");
                }
            }).success(function(req){
                console.log(req);
            })
        },
        delete : function(id) {
            var baseUrl ="http://www.uiucwp.com:4000";
            return $http.delete(baseUrl+'/api/users/'+id);
        }
    }
});
mp4Services.factory('Task', function($http, $window) {
    return {
        get : function() {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.get(baseUrl+'/api/tasks');
        },
        post : function(user) {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.post(baseUrl+'/api/tasks',user);
        },
        getUser: function(id) {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.get(baseUrl+'/api/tasks/'+id);
        },
        put : function(id,data) {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.put(baseUrl+'/api/tasks/'+id,data);//?
        },
        delete : function(id) {
            var baseUrl = $window.sessionStorage.baseurl;
            return $http.delete(baseUrl+'/api/tasks/'+id);
        }
    }
});