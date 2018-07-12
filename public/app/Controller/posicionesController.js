angular
  .module('playsoccer', [])
  .controller('posicionesController', posicionesController);
posicionesController.$inject = ['$scope', '$state'];
function posicionesController($scope, $state) {
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
