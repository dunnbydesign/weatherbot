/* globals angular */

'use strict'

angular.module('current', [])
  .controller('CurrentCtrl', ['$scope', CurrentCtrl])

function CurrentCtrl ($scope) {
  $scope.currentTemp = 50
}
