angular
  .module('playsoccer', [])
  .controller('principalController', principalController);
principalController.$inject = [
  '$scope',
  'DataBaseService',
  'Upload',
  'host',
  '$state',
  '$sessionStorage'
];
function principalController(
  $scope,
  DataBaseService,
  Upload,
  host,
  state,
  sessionStorage
) {
  if (sessionStorage.usuario != null) {
    $scope.submit = () => {
      if ($scope.form.file.$valid && $scope.file) {
        $scope.upload($scope.file);
      }
    };
    $scope.upload = function(file) {
      Upload.upload({
        url: host + 'equipo',
        data: { escudo: file, nombre: $scope.nombre }
      }).then(
        function(resp) {
          console.log(
            'Success ' +
              resp.config.data.file.name +
              'uploaded. Response: ' +
              resp.data
          );
        },
        function(resp) {
          console.log('Error status: ' + resp.status);
        },
        function(evt) {
          var progressPercentage = parseInt((100.0 * evt.loaded) / evt.total);
          console.log(
            'progress: ' + progressPercentage + '% ' + evt.config.data.file.name
          );
        }
      );
    };
    $scope.datos = () => {
      $('#show4').modal('show');
      DataBaseService.documentos()
        .then(result => {
          $scope.array = result.data;
        })
        .catch(err => {});
      DataBaseService.Getequipos()
        .then(result => {
          $scope.equipo = result.data;
        })
        .catch(err => {});
      DataBaseService.GetRolPosicion()
        .then(result => {
          $scope.posicion = result.data;
        })
        .catch(err => {});
    };
    $scope.AddJugador = () => {
      DataBaseService.AddJugador($scope.jugador)
        .then(result => {
          toastr.success(result.data.message);
        })
        .catch(err => {
          toastr.error(err.data.message);
        });
    };

    $scope.partidos = () => {
      DataBaseService.RegisterPartido()
        .then(result => {
          console.log(result);
          if (result.data.show) {
            $('#show2').modal('show');
          } else {
            $('#show2').modal('hide');
            toastr.warning(result.data.message);
          }
        })
        .catch(err => {});
      DataBaseService.GetGrupo()
        .then(result => {
          $scope.array = result.data;
        })
        .catch(err => {
          console.log(err);
        });
    };
  } else {
    state.go('login');
  }

  $scope.change = () => {
    DataBaseService.GetGrupoEquipo($scope.select)
      .then(result => {
        $scope.equipo = result.data;
      })
      .catch(err => {
        console.log(err);
      });
    //DataBaseService.then(result => {}).catch(err => {});
  };
  $scope.validacion = algo => {
    if ($scope.select1 == $scope.select2) {
      toastr.warning('Los dos equipos no pueden ser iguales!');
      $scope.select1 = '';
      $scope.select2 = '';
    }
    if (algo == 'equipo1') {
    } else {
    }
  };

  $scope.reset = () => {
    sessionStorage.$reset();
    state.go('login');
    toastr.success('Sesión cerrada correctamente');
  };
}
