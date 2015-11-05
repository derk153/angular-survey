'use strict';

/**
 * @ngdoc service
 * @name appApp.questions
 * @description
 * # questions
 */
angular.module('appApp')
  .service('surveyService', function() {
    var survey = [];

    var addSurvey = function(newObj) {
      survey.push(newObj);
    };

    var getSurvey = function() {
      return survey;
    };

    return {
      addSurvey: addSurvey,
      getSurvey: getSurvey
    };

  });

angular.module('appApp')
  .filter('checkboxValues', function() {
    return function(values) {
      var log = [];
      angular.forEach(values, function(value, key) {
        if (value){
          this.push(key);
        }
      }, log);

      console.log(log);
      // console.log(values.map(function(obj){return obj}) );

      return log.join(', ');
      // return values;
    };
  });
