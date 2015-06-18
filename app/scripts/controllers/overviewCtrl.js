app.controller('overviewCtrl', ['$scope', '$state', function($scope, $state) {
    var loadItems = function() {
        $scope.items = [];
        for(var todo in localStorage) {
            var item = {};
            item.title = JSON.parse((localStorage).getItem(todo)).title;
            item.description = JSON.parse((localStorage).getItem(todo)).description;
            item.done = JSON.parse((localStorage).getItem(todo)).done;
            $scope.items.push(item);
        }
    };

    loadItems();
    
    $scope.changeDone = function(isDone, todo) {
        var item = {};
        item.title = JSON.parse((localStorage).getItem(todo)).title;
        item.description = JSON.parse((localStorage).getItem(todo)).description;
        item.done = isDone;
        localStorage.setItem(item.title, JSON.stringify(item));
        loadItems();
    };
    
    $scope.deleteItem = function(item){
        localStorage.removeItem(item);
        loadItems();
    };

    $scope.addTodo = function() {
        $state.go('add');
    };
    
    $scope.deleteAllDone = function() {
        for(var todo in localStorage) {
            var done = JSON.parse((localStorage).getItem(todo)).done;
            if(done) {
                $scope.deleteItem(todo);
            }
        }
    };
    
    $scope.deleteAll = function() {
        localStorage.clear();
        $scope.items = localStorage;
    };
    
    
}]);