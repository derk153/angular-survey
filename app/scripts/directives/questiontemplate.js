'use strict';

/**
 * @ngdoc directive
 * @name appApp.directive:questionTemplate
 * @description
 * # questionTemplate
 */
angular.module('appApp')
  .directive('includeReplace', function () {
    console.log('stsrt');
    return {
      require: 'ngInclude',
      restrict: 'A',
      link: function (scope, el) {
          el.replaceWith(el.children());
      }
    };
  });
