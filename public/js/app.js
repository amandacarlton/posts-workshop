var app = angular.module('posts-workshop', ['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/posts.html',
        controller: 'postController'
    });
    $locationProvider.html5Mode(true);
 });
