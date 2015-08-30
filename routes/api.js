var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/posts-workshop');
var Post = db.get('posts');

/* GET home page. */
router.get('/posts', function(req, res, next) {
Post.find({}).then(function (response) {
console.log(response);
res.json(response);
});
});

module.exports = router;
