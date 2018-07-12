angular
  .module('playsoccer', [])
  .controller('equipoController', equipoController);
equipoController.$inject = ['$scope', '$state'];
function equipoController($scope, $state) {
  $scope.equipos = function() {
    $state.go('equipos');
  };
  $scope.inicioInvitado = function() {
    $state.go('inicioInvitado');
  };
}
