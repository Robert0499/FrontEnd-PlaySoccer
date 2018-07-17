angular
  .module('playsoccer', [])
  .controller('inicioInvitadoController', inicioInvitadoController);
inicioInvitadoController.$inject = ['$scope', '$state', 'DataBaseService'];
function inicioInvitadoController($scope, $state, DataBaseService) {
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
  $scope.invitado = function() {
    $state.go('invitado');
  };
  $scope.resultados = () => {
    $state.go('resultados');
  };

  DataBaseService.GetPartidos()
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
}
