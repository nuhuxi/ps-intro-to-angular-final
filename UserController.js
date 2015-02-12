(function() {

  var app = angular.module("githubViewer");

  var UserController = function($scope, github, $routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };
    
    var onRepos = function(data){
      $scope.repos = data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the user.";
    };


  /* If you declare these variables in the view - you have to use the syntax '4scope.***' when you use them*/

    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);
  };

  app.controller("UserController", UserController);

}());