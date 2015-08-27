var app = angular.module('posts-workshop', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/posts.html',
        controller: 'ApplicationController'
    });
    $locationProvider.html5Mode(true);
 });

app.controller("ApplicationController", function ($scope) {
  $scope.name="Amanda";
});
