angular
  .module('playsoccer')
  .controller('OctavosFinalController', OctavosFinalController);
OctavosFinalController.$inject = [
  '$scope',
  'DataBaseService',
  'host',
  '$state',
  '$sessionStorage'
];
function OctavosFinalController(
  $scope,
  DataBaseService,
  host,
  state,
  sessionStorage
) {}
