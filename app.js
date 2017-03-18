var app = angular.module('flapperNews', []);
// app called in index. ui.router is external module dependency

app.factory('posts', [function(){  // factory service for posts
  var o = {
    posts: []  // array of posts
  };
  return o;    // other services can now inject posts
}])

app.controller('MainCtrl', [    // main app controller
'$scope', 'posts', // inject posts service
function($scope, posts){ // scope lets us share data and functions that can be invoked
  $scope.posts = posts.posts;
  // any changes to $scope.posts will store and be accessable. also get post id
  $scope.addPost = function(){  // simple function that will push a post
    if ($scope.title === '') {return;} // don't allow empty posts
    $scope.posts.push({       // NEW POSTS
      title: $scope.title,    // title of post
      link: $scope.link,      // link for post
      upvotes: 0             // initial upvotes

    });
    // $scope.title binding pulls from submit/input field
    $scope.title = ''; // sets title to empty string so not left in input field
    $scope.link = '';

  }

  $scope.incrementUpvotes = function(post){  // upvoting posts
    post.upvotes += 1;

  }

}]);
