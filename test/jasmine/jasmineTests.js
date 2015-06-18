describe('addTodoCtrl', function() {
    beforeEach(module('todo-application'));
    
    var $controller;
    
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));
    
    describe('$scope.saveTodo', function() {
        it('Adds a todo to the localstorage', function() {
            localStorage.clear();
            var $scope = {};
            var controller = $controller('addTodoCtrl', {$scope: $scope});
            $scope.title = "This is the title";
            $scope.description = "This is the description";
            $scope.saveTodo();
            expect(localStorage.length).toBe(1);
        });
    });
});
    
describe('overviewCtrl', function() {
    beforeEach(module('todo-application'));
    
    var $controller;
    
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));
    
    describe('$scope.deleteAll', function() {
        it('Delete all todos', function() {
            var $scope = {};
            var controller = $controller('overviewCtrl', {$scope: $scope});
            $scope.deleteAll();
            expect(localStorage.length).toBe(0);
        });
    });
});