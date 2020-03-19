angular.module('CodeHill', ['ui.router', 'ngStorage',
'angularUtils.directives.dirPagination','sfoGov',
,'dashboard']).config(['$stateProvider', '$urlRouterProvider',
 function ($stateProvider, $urlRouterProvider)
    {
        $urlRouterProvider.otherwise('/index');
        $stateProvider.state('index', {
            url: '/index'
            , templateUrl: 'welcome.html'
            , controller: 'WelcomeController'
        }).state('menu', {
            url: '/menu'
            , templateUrl: 'home.html'
        }).state('menu.dashboard', {
            url: '/dashboard'
            , templateUrl: 'dashboard.html'
               , controller: 'dashboardController'
     }).state('menu.sfoGov', {
            url: '/sfoGov'
            , templateUrl: 'sfoGov.html'
               , controller: 'sfoGovController'
     }).state('menu.sfoGovEdit', {
        url: '/sfoGovEdit'
        , templateUrl: 'sfoGovEdit.html'
           , controller: 'sfoGovController'
    })
     .state('menu.sfoGovdetails', {
            url: '/sfoGovdetails/:flight_number'
            , templateUrl: 'sfoGovEdit.html'
               , controller: 'sfoGovController'
        }).state('menu.sfoGovList', {
            url: '/sfoGovList'
            , templateUrl: 'sfoGovList.html'
            , controller: 'sfoGovController'
        })
}

]).controller('WelcomeController', function ($scope, $http, $state, $stateParams) {
    $scope.home = function () {
        console.log("home");
        $state.go('menu.sfoGovList');
    };
})