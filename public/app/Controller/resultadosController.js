angular
  .module('playsoccer', [])
  .controller('resultadosController', ResultadosController);

ResultadosController.$inject = ['$scope', '$state'];

function ResultadosController($scope, $state) {
  $scope.infoPartido = function() {
    $state.go('infoPartido');
  };
  $scope.equipos = function() {
    $state.go('equipos');
  };
  $scope.inicioInvitado = function() {
    $state.go('inicioInvitado');
  };
  $scope.posiciones = function() {
    $state.go('posiciones');
  };
  $scope.resultados = function() {
    $state.go('resultados');
  };
}
