angular.module('playsoccer', []).controller('loginController', loginController);
loginController.$inject = ['$scope'];
function loginController($scope) {
  $scope.nombre = 'STY';
}
