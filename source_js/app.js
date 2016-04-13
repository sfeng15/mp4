var app = angular.module('mp4', ['ngRoute', 'mp4Controllers', 'mp4Services']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/UserList', {
    templateUrl: 'partials/UserList.html',
    controller: 'UserListController'
  })
  .when('/UserDetails/:id', {
    templateUrl: 'partials/UserDetails.html',
    controller: 'UserDetailsController'
  })
  .when('/AddUser', {
    templateUrl: 'partials/AddUser.html',
    controller: 'AddUserController'
  })
  .when('/TaskList', {
    templateUrl: 'partials/TaskList.html',
    controller: 'TaskListController'
  })
  .when('/TaskDetails', {
    templateUrl: 'partials/TaskDetails.html',
    controller: 'TaskDetailsController'
  })
  .when('/AddTask', {
    templateUrl: 'partials/AddTask.html',
    controller: 'AddTaskController'
  })

  .when('/EditTask', {
    templateUrl: 'partials/EditTask.html',
    controller: 'EditTaskController'
  })
  .when('/settings', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController'
  })
  .otherwise({
    redirectTo: '/UserList'
  });
}]);
