'use strict';

angular.module('projectsApp')
    .controller('RepoIssuesCtrl', function ($scope, RepositoryVariables) {

        var repoList = RepositoryVariables.retrieveVariable("repositoryList");
        $scope.issues = [];

        if (!_.isNull(repoList)) {
            _.each(repoList, function (value, key) {
                if (value === "open_issues")
                    $scope.issues.push(value, key);
            });
        }
    });
