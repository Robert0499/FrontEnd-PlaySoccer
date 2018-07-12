(function() {
  'use strict';

  angular.module('playsoccer').service('DataBaseService', DataBaseService);

  DataBaseService.$inject = ['$http', 'host', '$httpParamSerializerJQLike'];

  function DataBaseService($http, host, $httpParamSerializerJQLike) {
    this.documentos = data => {
      return $http.get(host + 'tpd');
    };
    this.login = data => {
      return $http.post(
        host + 'usuarios/auth',
        $httpParamSerializerJQLike(data)
      );
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
  }
})();
