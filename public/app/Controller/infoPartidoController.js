angular
  .module('playsoccer', [])
  .controller('infoPartidoController', infoPartidoController);
infoPartidoController.$inject = ['$scope', '$state'];
function infoPartidoController($scope, $state) {
  $scope.equipo1 = true;
  $scope.equipo2 = false;
  $scope.iequipo1 = function() {
    if ($scope.equipo2 == true) {
      $scope.equipo1 = !$scope.equipo1;
      $scope.equipo2 = !$scope.equipo2;
    }
  };
  $scope.iequipo2 = function() {
    if ($scope.equipo1 == true) {
      $scope.equipo1 = !$scope.equipo1;
      $scope.equipo2 = !$scope.equipo2;
    }
  };
  $scope.inicioInvitado = function() {
    $state.go('inicioInvitado');
  };
  $scope.equipos = function() {
    $state.go('equipos');
  };
  $scope.posiciones = function() {
    $state.go('posiciones');
  };

  $scope.resultados = function() {
    $state.go('resultados');
  };
  $scope.jugadoresT1 = [
    {
      nombre: 'David Ospina',
      posicion: 'Guardameta'
    }
  ];
  $scope.jugadoresT2 = [{ nombre: 'Mario Quindes', posicion: 'Guardameta' }];
}
