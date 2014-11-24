angular.module('ngBootstrapApp', ['ngMaterial'])
.controller('AppCtrl', function($scope, $timeout, $mdSidenav) {
  $scope.projects = [
      {
        logo : '/img/logos/reuters.png',
        organization: 'Thomson Reuters',
        position: 'Senior UI Developer',
        description: 'Working on a central user experience team, I assist in building and maintaining advanced Angular directives for a community of internal software developers.',
        start: "September 2014",
        end: "",
        accomplishments : [
          {
            label: 'Responsible for platform upgrades (Angular Bootstrap, Bootstrap, Wijmo)',
          },
          {
            label: 'Prototype components using various JavaScript libraries',
          },
          {
            label: 'Work very closely with UX and visual designers to create pixel perfect cross browser experiences',
          },
        ]
      },
  ]
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle();
  };
  $scope.open = function() {
    $mdSidenav('left').toggle();
  };
})

.controller('LeftCtrl', function($scope, $timeout, $mdSidenav) {
  $scope.close = function() {
    $mdSidenav('left').close();
  };
})

.controller('RightCtrl', function($scope, $timeout, $mdSidenav) {
  $scope.close = function() {
    $mdSidenav('right').close();
  };
})

.controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet) {
  $scope.alert = '';

  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    console.log("bang!");
    $mdBottomSheet.show({
      templateUrl: 'templates/bottom-sheet-list-template.html',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };

})

.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {

  $scope.items = [
    { name: 'GitHub', icon: 'share' },
    { name: 'Twitter', icon: 'upload' },
    { name: 'LinkedIn', icon: 'copy' },
    { name: 'Email', icon: 'print' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})
