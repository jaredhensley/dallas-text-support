angular.module('textSupport').controller('mainCtrl', function($scope, $firebaseObject, mainService) {
  $scope.numbers = $firebaseObject(new Firebase('https://text-support2.firebaseio.com/numbers'));
  $scope.sendReply = function(message, number) {
    console.log(message, number);
    return mainService.sendReply({message: message, number: number});
  };
});
