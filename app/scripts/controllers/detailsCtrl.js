app.controller('detailsCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
    $scope.todo = {"title": JSON.parse((localStorage).getItem($stateParams.title)).title, "description": JSON.parse((localStorage).getItem($stateParams.title)).description};
}]);