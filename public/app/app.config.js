(() => {
  angular.module('playsoccer').config(config);

  config.$inject = [
    '$httpProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    'state'
  ];
  function config(
    $httpProvider,
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    state
  ) {
    $httpProvider.defaults.headers['Content-Type'] =
      'Access-Control-Allow-Origin: *';
    $httpProvider.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded; charset=UTF-8;';
    $httpProvider.defaults.headers.put['Content-Type'] =
      'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.headers.delete = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    };

    $urlRouterProvider.otherwise('/inicioInvitado');
    state($stateProvider, 'invitado');
    state($stateProvider, 'inicioInvitado');
    state($stateProvider, 'infoPartido');
    state($stateProvider, 'login');
    state($stateProvider, 'principal');
    state($stateProvider, 'equipos');
    state($stateProvider, 'equipo');
    state($stateProvider, 'OctavosFinal');
    state($stateProvider, 'dashboard');
  }
})();
