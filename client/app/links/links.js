angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // $scope.data = {};
  // console.log($scope.data);
  Links.getAll()
  .then(function (links) {
    // console.log(links);
    $scope.data = {links: links};
  })
  .catch(function(err) {
    console.log(err);
  });

  $scope.redirect = function(index) {
    //get value at index
    // redirect to that page
    var site = $scope.data.links[index].url;
    console.log(site);
    window.location.replace(site);
  };
});
  