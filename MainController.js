(function() {

  var app = angular.module("githubViewer");

  var MainController = function($scope, $interval, $location) {


    
    var decrementCountdown = function(){
      $scope.countdown -= 1;
      if($scope.countdown < 1){
        $scope.search($scope.username);
      }
    };
    var countdownInterval = null;
    var startCountdown = function(){
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
      
    };
    
    $scope.search = function(username) {
      if(countdownInterval){
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      $location.path("/user/" + username);//This takes us TO a page

    };

  /* If you declare these variables in the view - you have to use the syntax '4scope.***' when you use them*/

    $scope.username = "Angular";
    $scope.countdown = 8;
    
    startCountdown();



  };

  app.controller("MainController", MainController);

}());