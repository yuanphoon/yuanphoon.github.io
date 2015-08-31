'use strict';

/**
 * @ngdoc directive
 * @name githubPageApp.directive:backImg
 * @description
 * # backImg
 */
angular.module('githubPageApp')
  .directive('backImg', function () {
        return {
            restrict: 'A',
            link: function postLink(scope, element, attrs) {
                var url;

                url = attrs.backImg;

                element.css({
                    'background-image'      : 'url(' + url + ')',
                    'background-size'       : 'cover',
                    'background-position'   : 'center center'
                });
            }
        };
  });
