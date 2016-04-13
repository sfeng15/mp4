var mp4Controllers = angular.module('mp4Controllers', []);


mp4Controllers.controller('UserListController', ['$scope', '$http', 'User', '$window' , function($scope, $http,  User, $window) {

  User.get().success(function(newData){
    $scope.users = newData.data;
    console.log($scope.users);
  });

    //User.delete(id).success(function(res){
    //  $scope.users = data;
    //});

}]);


mp4Controllers.controller('UserDetailsController', ['$scope', '$http', '$routeParams','User', '$window' , function($scope, $http,  User, $window,$routeParams) {

  //User.getUser($scope.id).success(function(data){
  //  $scope.user=data;
  //  console.log($scope.user);
  //});

  //$scope.click(){//function is defined in the
  //  var data=$scope.newData;
  //  var id=$scope.id;//id and newData can be entered in the html
  //
  //  User.put(id,data).success(function(data){
  //    $scope.users = data;
  //  });

  //};
$scope.id=$routeParams.id;

    User.delete($scope.id).success(function(user) {
          $scope.user = user.data;
          console.log($scope.user);
        })
        .error(function(err){

        });



}]);
//

mp4Controllers.controller('AddUserController', ['$scope', '$http', 'User'  , function($scope, $http, User) {

  $scope.setData = function(){
    User.post($scope.name,$scope.email)
        .success(function(res) {
          //console.log('User'+$scope.name+"has been added");
            $scope.response_message = res.message;
          })
          .error(function(err){

          });
  };

}]);

//mp4Controllers.controller('TaskListController', ['$scope', '$http', 'Task', '$window' , function($scope, $http,  Task, $window) {
//
//  Task.get().success(function(data){
//    $scope.tasks = data;
//  });
//
//
//}]);
//
//mp4Controllers.controller('TaskDetailsController', ['$scope', '$http', 'Task', '$window' , function($scope, $http,  Task, $window) {
//
//  Task.getUser().success(function(data){
//    $scope.task=data;
//  });
//
//}]);
//
//
//
//
//
//
//
//
//
//mp4Controllers.controller('AddUserController', ['$scope', 'CommonData'  , function($scope, CommonData) {
//  $scope.data = "";
//  $scope.displayText = "";
//
//  $scope.setData = function(){
//    CommonData.setData($scope.data);
//    $scope.displayText = "Data set"
//
//  };
//
//}]);
//
//mp4Controllers.controller('AddTaskController', ['$scope', 'CommonData' , function($scope, CommonData) {
//  $scope.data = "";
//
//  $scope.getData = function(){
//    $scope.data = CommonData.getData();
//
//  };
//
//}]);

mp4Controllers.controller('EditTaskController', ['$scope', 'CommonData' , function($scope, CommonData) {
  $scope.data = "";

  $scope.getData = function(){
    $scope.data = CommonData.getData();

  };

}]);

mp4Controllers.controller('SettingsController', ['$scope' , '$window' , function($scope, $window) {
  $scope.url = $window.sessionStorage.baseurl;

  $scope.setUrl = function(){
    $window.sessionStorage.baseurl = $scope.url;
    $scope.displayText = "URL set";

  };

}]);
