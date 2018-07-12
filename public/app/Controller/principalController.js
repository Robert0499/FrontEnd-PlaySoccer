angular
  .module('playsoccer', [])
  .controller('principalController', principalController);
principalController.$inject = ['$scope', 'DataBaseService', 'Upload', 'host'];
function principalController($scope, DataBaseService, Upload, host) {
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
}
