'use strict';

/**
 * @ngdoc function
 * @name githubPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubPageApp
 */
angular.module('githubPageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
