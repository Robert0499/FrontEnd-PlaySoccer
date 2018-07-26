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
          toastr.error(resp.data.message);
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
          /*console.log(result);*/
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
      DataBaseService.getJugadores($scope.select1)
        .then(result => {
          /*console.log(result);*/
          $scope.jugadores1 = result.data;
        })
        .catch(err => {});
    } else {
      DataBaseService.getJugadores($scope.select2)
        .then(result => {
          $scope.jugadores2 = result.data;
        })
        .catch(err => {});
    }
  };
  $scope.objetos = [];
  $scope.gol1 = 0;
  $scope.gol2 = 0;
  $scope.goles = algo => {
    if (algo == 'equipo1') {
      $scope.gol1++;
      $scope.objetos.push({
        jugador: $scope.jugador1,
        gol: true,
        tarjeta_amarilla: false,
        tarjeta_roja: false,
        equipo: $scope.select1
      });
    } else if (algo == 'equipo2') {
      $scope.gol2++;
      $scope.objetos.push({
        jugador: $scope.jugador2,
        gol: true,
        tarjeta_amarilla: false,
        tarjeta_roja: false,
        equipo: $scope.select2
      });
    }
    /*DataBaseService.SenID({ id: $scope.select1 })
      .then(result => {
        toastr.success(result.data.message);
      })
      .catch(err => {
        toastr.success(err.data.erros);
      });*/
    toastr.info('Goooool');
  };
  $scope.RegistrarPartidos = () => {
    DataBaseService.RegisterPartidos({
      objetos: $scope.objetos,
      equipo1: $scope.select1,
      goles_visitante: $scope.gol2,
      goles_local: $scope.gol1,
      equipo2: $scope.select2
    })
      .then(result => {
        toastr.success(result.data.message);
      })
      .catch(err => {
        toastr.error(err.data.message);
      });
  };
  $scope.YellowCard = algo => {
    if (algo == 'equipo1') {
      $scope.objetos.push({
        jugador: $scope.jugador1,
        tarjeta_amarilla: true,
        tarjeta_roja: false,
        gol: false,
        equipo: $scope.select1
      });
    } else if (algo == 'equipo2') {
      $scope.objetos.push({
        jugador: $scope.jugador2,
        tarjeta_amarilla: true,
        tarjeta_roja: false,
        gol: false,
        equipo: $scope.select2
      });
    }
    toastr.warning('Tarjeta Amarilla');
  };

  $scope.RedCard = algo => {
    if (algo == 'equipo1') {
      $scope.objetos.push({
        jugador: $scope.jugador1,
        tarjeta_amarilla: false,
        tarjeta_roja: true,
        gol: false,
        equipo: $scope.select1
      });
    } else if (algo == 'equipo2') {
      $scope.objetos.push({
        jugador: $scope.jugador2,
        tarjeta_roja: true,
        tarjeta_amarilla: false,
        gol: false,
        equipo: $scope.select2
      });
    }
    toastr.error('Tarjeta Roja');
  };

  $scope.reset = () => {
    sessionStorage.$reset();
    state.go('login');
    toastr.success('Sesión cerrada correctamente');
  };
}
