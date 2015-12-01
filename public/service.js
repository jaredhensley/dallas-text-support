angular.module('textSupport').service('mainService', function($http) {
  this.sendReply = function(message) {
    return $http({
      method: 'POST',
      url: '/api/reply',
      data: message,
    });
  };
});
