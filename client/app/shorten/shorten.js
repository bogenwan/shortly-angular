angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {url: $location};
  $scope.addLink = function() {
    return Links.addOne($scope.link);
  };
});
