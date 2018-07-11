angular
  .module('playsoccer', [])
  .controller('inicioInvitadoController', inicioInvitadoController);
inicioInvitadoController.$inject = ['$scope', '$state'];
function inicioInvitadoController($scope, $state) {
  $scope.infoPartido = function() {
    $state.go('infoPartido');
  };
}
