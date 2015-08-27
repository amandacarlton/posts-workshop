var app = angular.module('posts-workshop', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/posts.html',
        controller: 'ApplicationController'
    });
 });
 
app.controller("ApplicationController", function ($scope) {
  $scope.name="Amanda";
});
