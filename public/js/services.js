app.factory("postsService", function ($http) {
  return  {

  getData: function () {
  return $http.get('/api/posts').then(function(response) {
    console.log(response);
    return response.data;
  });
  }
};
});
