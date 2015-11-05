'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MainCtrl', function($scope, $http, surveyService, $state) {

    $scope.types = [{
      name: 'Radio buttons',
      value: 'radio'
    }, {
      name: 'Checkbxes',
      value: 'checkbox'
    }, {
      name: 'Drop-down',
      value: 'dropdown'
    }, {
      name: 'Input',
      value: 'input'
    }];

    $scope.formData = {name: ''};
    $scope.result = {};
    $scope.questions = [];

    var defaultQuestions = {
      type: $scope.types[0].value,
      options: []
    };

    $scope.question = defaultQuestions;

    $scope.addQuestion = function() {
      var question = $scope.question;

      $scope.questions.push(question);
      $scope.question = {
        type: $scope.types[0].value,
        options: []
      };
    };

    $scope.removeTodo = function(index) {
      $scope.questions.splice(index, 1);
    };

    $scope.addField = function(item) {
      item.push('');
    };
    $scope.removeField = function(item, index) {
      item.splice(index, 1);
    };

    $scope.submitSurvey = function(data){
      // surveyService.addSurvey(data);
      $scope.formData.questions = data;
      // $http.get('data/questions.json').success(function(data) {
      //   $scope.formData.questions = data;
      // });
    };

    $scope.addSurvey = function () {
      // var result = JSON.stringify($scope.formData);
      $scope.result = $scope.formData;
      $state.go('main.result');
    };

  });
