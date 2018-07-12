angular
  .module('playsoccer', [])
  .controller('posicionesController', posicionesController);
posicionesController.$inject = ['$scope', '$state', 'DataBaseService'];
function posicionesController($scope, $state, DataBaseService) {
  $scope.inicioInvitado = function() {
    $state.go('inicioInvitado');
  };
  $scope.equipos = function() {
    $state.go('equipos');
  };
  $scope.posiciones = function() {
    $state.go('posiciones');
  };
}
