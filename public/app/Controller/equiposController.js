angular
  .module('playsoccer', [])
  .controller('equiposController', equiposController);
equiposController.$inject = ['$scope', '$state'];
function equiposController($scope, $state) {
  $scope.inicioInvitado = function() {
    $state.go('inicioInvitado');
  };
  $scope.equipos = function() {
    $state.go('equipos');
  };
  $scope.equipo = function() {
    $state.go('equipo');
  };
}
