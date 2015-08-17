'use strict';

angular.module('projectsApp')
    .controller('SearchCtrl', function ($scope, ListServices, RepositoryVariables) {

        $scope.load = function () {
            $scope.searchLabel = "Search by repository name";
        };

        $scope.submit = function () {
            $scope.repositoryList = [];
            ListServices.getRepositoryByName($scope.name).then(function (response) {
                    if (response.status === 200) {
                        $scope.repositories = response.data.items;

                        _.each($scope.repositories, function (key) {
                            _.each(key, function (key, value) {
                                getUrlData(value, key);
                                RepositoryVariables.saveVariable("repositoryList", $scope.repositoryList);
                            });
                        });
                    }
            });
        };

        var getUrlData = function (value, key) {
            var displayList = ["html_url", "description", "forks_count", "stargazers_count", "open_issues"];
            _.each(displayList, function (item) {
                if (value === item) {
                    $scope.repositoryList.push(item , key );
                }
            })
        }
    })

    .factory('ListServices', function ($http) {
        return {
            getRepositoryByName: function (searchName) {
                var url = 'https://api.github.com/search/repositories?q=' + searchName;
                return $http({headers: {'Content-Type': 'application/json'}, url: url, method: 'GET'})
            }
        };
    })
    .factory('RepositoryVariables', function () {
        var savedVariables = {};
        return {
            saveVariable: function (key, value) {
                savedVariables[key] = value;
            },
            retrieveVariable: function (key) {
                return savedVariables[key];
            }
        };
    });
