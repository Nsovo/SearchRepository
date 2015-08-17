'use strict';

/**
 * @ngdoc overview
 * @name projectsApp
 * @description
 * # projectsApp
 *
 * Main module of the application.
 */
angular
    .module('projectsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ]).
    config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl'
            })
            .when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl'
            })
            .when('/issues', {
                templateUrl: 'views/repoIssues.html',
                controller: 'RepoIssuesCtrl'
            }).when('/graph', {
                templateUrl: '../views/graph.html',
                controller: 'GraphCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
