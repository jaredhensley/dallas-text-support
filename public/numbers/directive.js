angular.module('textSupport').directive('numbers', function() {
  return {
    templateUrl: 'numbers/numbersTmpl.html',
    scope: {
      number: '=',
      messages: '=',
      sendReply: '&',
    },
    controller: function($scope) {
      console.log($scope.messages);
      $scope.replyNow = function() {
        $scope.sendReply({message: $scope.reply, number: $scope.number}).then(function(res) {
          $scope.reply = '';
        });
      };
    },
  };
});
