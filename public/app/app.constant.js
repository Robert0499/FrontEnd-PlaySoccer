//angular.module('playsoccer').constant('host');
angular.module('playsoccer').constant('state', (stateprovider, name) => {
  stateprovider.state(name, {
    url: '/' + name,
    controller: name + 'Controller',
    templateUrl: 'app/View/' + name + '.html',
    resolve: {
      loadMyCtrl: [
        '$ocLazyLoad',
        $ocLazyLoad => {
          return $ocLazyLoad.load([
            { files: ['app/Controller/' + name + 'Controller.js'] }
          ]);
        }
      ]
    }
  });
});
angular
  .module('playsoccer')
  .constant('host', 'http://10.72.132.105/api-playsoccer/public/api/');
// equipo rolposicion
