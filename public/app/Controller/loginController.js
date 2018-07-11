angular.module('playsoccer', []).controller('loginController', loginController);
loginController.$inject = ['$scope', 'DataBaseService'];
function loginController($scope, DataBaseService) {
  DataBaseService.documentos()
    .then(result => {
      $scope.array = result.data;
      $scope.login = () => {
        DataBaseService.login($scope.usuario)
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
      };
    })
    .catch(err => {});
}
