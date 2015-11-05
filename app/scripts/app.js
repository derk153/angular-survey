'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('appApp', [
    'ngMessages',
    'ngRoute',
    'ui.router'
  ])
  .config(function($routeProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('main.create', {
        url: '/create',
        templateUrl: 'views/main-create.html'
      })
      .state('main.take', {
        url: '/take',
        templateUrl: 'views/main-take.html'
      })
      .state('main.result', {
        url: '/result',
        templateUrl: 'views/main-result.html'
      });
    $urlRouterProvider.otherwise('/main/create');
    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl',
    //     controllerAs: 'main'
    //   })
    //   .when('/survey', {
    //     templateUrl: 'views/survey.html',
    //     controller: 'SurveyCtrl',
    //     controllerAs: 'survey'
    //   })
    //   .when('/build', {
    //     templateUrl: 'views/build.html',
    //     controller: 'BuildCtrl',
    //     controllerAs: 'build'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
  });
