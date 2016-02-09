/* globals angular */

'use strict'

angular.module('forecast', [])
  .controller('ForecastCtrl', ['$scope', ForecastCtrl])

function ForecastCtrl ($scope) {
  $scope.forecastTemp = 60
}
