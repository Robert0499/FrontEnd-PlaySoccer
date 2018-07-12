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
  }
})();
