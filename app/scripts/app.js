var app = angular.module('todo-application', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/overview');
    
    $stateProvider
        .state('overview', {
            url: '/overview',
            templateUrl: 'partials/overview.html',
            controller: 'overviewCtrl'
        })
        .state('add', {
            url: '/add',
            templateUrl: 'partials/addTodo.html',
            controller: 'addTodoCtrl'
        })
        .state('details', {
            url: '/details/:title',
            templateUrl: 'partials/todoDetails.html',
            controller: 'detailsCtrl'
        });
}]);