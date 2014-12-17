app.controller('MenuCtrl', ['$scope', '$timeout', '$mdSidenav', function($scope, $timeout, $mdSidenav) {
	$scope.open = function() {
    $mdSidenav('left').toggle();
  };
  $scope.close = function() {
    $mdSidenav('left').close();
  };
}])