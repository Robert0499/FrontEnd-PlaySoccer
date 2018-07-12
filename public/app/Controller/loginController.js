angular.module('playsoccer', []).controller('loginController', loginController);
loginController.$inject = [
  '$scope',
  'DataBaseService',
  '$state',
  '$sessionStorage'
];
function loginController($scope, DataBaseService, state, sessionStorage) {
  if (sessionStorage.usuario == null) {
    DataBaseService.documentos()
      .then(result => {
        $scope.array = result.data;
        $scope.login = () => {
          DataBaseService.login($scope.usuario)
            .then(result => {
              sessionStorage.usuario = result.data.data.usu_token;
              if (result.data.data.fk_id_rol == 1) {
                state.go('dashboard');
              } else if (result.data.data.fk_id_rol == 2) {
                state.go('principal');
              } else {
                toastr.error('El rol no existe');
              }
            })
            .catch(err => {
              // console.log(err.status);
              if (err.status == 422) {
                toastr.error(err.data.errors.numero_documento);
              } else {
                toastr.error(err.data.message);
              }
            });
        };
      })
      .catch(err => {});
  } else {
    state.go('principal');
  }
}
