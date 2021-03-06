angular
  .module('playsoccer', [])
  .controller('equipoController', equipoController);
equipoController.$inject = [
  '$scope',
  '$state',
  '$sessionStorage',

  'DataBaseService'
];
function equipoController($scope, $state, $sessionStorage, DataBaseService) {
  $scope.id = $sessionStorage.id;
  DataBaseService.getJugadores($scope.id)
    .then(result => {
      $scope.jugadores = result.data;
    })
    .catch(err => {});
  $scope.equipos = function() {
    $state.go('equipos');
  };
  $scope.inicioInvitado = function() {
    $state.go('inicioInvitado');
  };
  $scope.posiciones = function() {
    $state.go('posiciones');
  };
  $scope.resultados = () => {
    $state.go('resultados');
  };
  $scope.equiposs = $sessionStorage.equiposs;
  $scope.equipo = {};
  $scope.equiposs.forEach(e => {
    if (e.id === $scope.id) {
      $scope.equipo = e;
    }
  });
}
