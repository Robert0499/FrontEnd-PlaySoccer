angular
  .module('playsoccer', [])
  .controller('equiposController', equiposController);
equiposController.$inject = [
  '$scope',
  '$state',
  'DataBaseService',
  'img',
  '$sessionStorage'
];
function equiposController(
  $scope,
  $state,
  DataBaseService,
  img,
  $sessionStorage
) {
  DataBaseService.Getequipos()
    .then(result => {
      $scope.equipo = result.data;
      $scope.equipo.forEach(function(element) {
        element.escudo = img + element.escudo;
      });
      $sessionStorage.equiposs = $scope.equipo;
    })
    .catch(err => {});
  $scope.inicioInvitado = function() {
    $state.go('inicioInvitado');
  };
  $scope.equipos = function() {
    $state.go('equipos');
  };
  $scope.infoEquipo = function(id) {
    $sessionStorage.id = id;
    $state.go('equipo');
  };
  $scope.posiciones = function() {
    $state.go('posiciones');
  };
}
