angular
  .module('playsoccer')
  .controller('dashboardController', dashboardController);
dashboardController.$inject = [
  '$scope',
  'DataBaseService',
  'host',
  '$state',
  '$sessionStorage'
];
function dashboardController(
  $scope,
  DataBaseService,
  host,
  state,
  sessionStorage
) {
  if (sessionStorage.usuario != null) {
    DataBaseService.documentos()
      .then(result => {
        $scope.array = result.data;
        $scope.Registro = () => {
          $scope.usuario.fk_id_rol = 2;
          DataBaseService.Administrador($scope.usuario)
            .then(result => {
              toastr.success(result.data.message);
            })
            .catch(err => {
              toastr.error(err.data.message);
            });
        };
      })
      .catch(err => {});
  } else {
    state.go('login');
  }
  $scope.reset = () => {
    sessionStorage.$reset();
    state.go('login');
    toastr.success('Sesión cerrada correctamente');
  };
}
