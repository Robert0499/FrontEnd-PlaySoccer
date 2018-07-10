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
