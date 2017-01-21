angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  Links.getAll()
  .then(function (links) {
    // console.log(links);
    $scope.data = {links: links};
  })
  .catch(function(err) {
    console.log(err);
  });
  
});
