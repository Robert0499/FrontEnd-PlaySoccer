angular.module('playsoccer').service('DataBaseService', DataBaseService);

DataBaseService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];

function DataBaseService($http, host, $httpParamSerializerJQLike) {
  this.documentos = data => {
    return $http.get(host + 'tpd');
  };
  this.login = data => {
    return $http.post(host + 'usuarios/auth', $httpParamSerializerJQLike(data));
  };
  this.Getequipos = () => {
    return $http.get(host + 'equipo');
  };
  this.getJugadores = id => {
    return $http({
      method: 'GET',
      url: host + 'jugadores/equipo?id=' + id
    });
  };
  this.GetRolPosicion = () => {
    return $http.get(host + 'rolposicion');
  };
  this.AddJugador = data => {
    return $http.post(host + 'jugador', $httpParamSerializerJQLike(data));
  };
  this.RegisterPartido = () => {
    return $http.get(host + 'partidos/verify');
  };
  this.Administrador = data => {
    return $http.post(host + 'usuario', $httpParamSerializerJQLike(data));
  };
  this.GetGrupo = () => {
    return $http.get(host + 'grupo');
  };
  this.GetGrupoEquipo = id => {
    return $http({
      method: 'GET',
      url: host + 'equipos/grupo?id=' + id
    });
  };
}
