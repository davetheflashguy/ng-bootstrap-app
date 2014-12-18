app.controller('MenuCtrl', ['$scope', '$timeout', '$mdSidenav', function($scope, $timeout, $mdSidenav) {
	$scope.items = [ 
		{
			label : "Menu Item 1"
		},
		{
			label : "Menu Item 2"
		},
		{
			label : "Menu Item 3"
		},
		{
			label : "Menu Item 4"
		},
		{
			label : "Menu Item 5"
		},
		{
			label : "Menu Item 6"
		},
	]

	$scope.open = function() {
    $mdSidenav('left').toggle();
  };
  $scope.close = function() {
    $mdSidenav('left').close();
  };
}])