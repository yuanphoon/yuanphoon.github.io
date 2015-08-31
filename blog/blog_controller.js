'use strict';

/**
 * @ngdoc function
 * @name githubPageApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the githubPageApp
 */
angular.module('githubPageApp')
  .controller('BlogCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('blog/blog.json').success(function(data) {
        $scope.blogs = data;
    });
  }]);
