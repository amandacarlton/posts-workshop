app.controller("postController",["$scope", "postsService",
 function ($scope, postsService) {
  //  $scope.posts = postsService.getData();
  postsService.getData().then(function (posts) {
    console.log(posts);
    $scope.posts=posts;
  });
}]);

app.controller("ApplicationController", function ($scope) {
  $scope.name="amanda";
});
