angular
  .module('playsoccer', [])
  .controller('inicioInvitadoController', inicioInvitadoController);
inicioInvitadoController.$inject = ['$scope', '$state'];
function inicioInvitadoController($scope, $state) {
  $scope.infoPartido = function() {
    $state.go('infoPartido');
  };
  $scope.equipos = function() {
    $state.go('equipos');
  };
  $scope.inicioInvitado = function() {
    $state.go('inicioInvitado');
  };
}
