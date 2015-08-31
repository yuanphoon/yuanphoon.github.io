'use strict';

/**
 * @ngdoc function
 * @name githubPageApp.controller:PortfolioDetailCtrl
 * @description
 * # PortfolioDetailCtrl
 * Controller of the githubPageApp
 */
angular.module('githubPageApp')
  .controller('PortfolioDetailCtrl', ['$scope', '$routeParams', '$http', '$location', function ($scope, $routeParams, $http, $location) {
    $http.get('portfolio/portfolio.json').success(function(data) {
        $scope.portfolio = data;
    });
    $http.get('portfolio_detail/' + $routeParams.portfolioId + '.json').success(function(data) {
        $scope.folioInfo = data;
    });
    $scope.isCurrent = function(viewLocation) {
        return viewLocation === $location.path();
    };
  }]);
