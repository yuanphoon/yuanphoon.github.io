'use strict';

/**
 * @ngdoc function
 * @name githubPageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the githubPageApp
 */
angular.module('githubPageApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
