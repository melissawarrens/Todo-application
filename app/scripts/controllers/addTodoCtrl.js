app.controller('addTodoCtrl', ['$scope', '$state', function($scope, $state) {
    if(typeof(Storage) == "undefined") {
        alert('You cannot use this application because your browser does not support local storage.');
    }
    
    $scope.saveTodo = function() {
        var todo = {};
        todo.title = $scope.title;
        todo.description = $scope.description;
        todo.done = false;
        localStorage.setItem($scope.title, JSON.stringify(todo));
        $state.go('overview');
    };
}]);