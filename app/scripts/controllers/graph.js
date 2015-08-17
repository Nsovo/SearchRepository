'use strict';

angular.module('projectsApp')
    .controller('GraphCtrl', function ( RepositoryVariables) {

        var repoList = RepositoryVariables.retrieveVariable("repositoryList");

        var forks_count =[];
        var stargazers_count =[];
        var open_issues =[];
        if (!_.isNull(repoList)) {
            _.each(repoList, function (value, key) {
               if(value ==="forks_count" )
                   forks_count.push(key);
                if(value ==="stargazers_count" )
                    stargazers_count.push(key);
                if(value ==="description" )
                    open_issues.push(key);
            });

            var chart = c3.generate({
                data: {
                    json: {
                        "Forks Count": forks_count,
                        "Stargazers Count": stargazers_count,
                        "Open Issues": open_issues
                    }
                },
                types: {
                    "data": 'bar',
                    "Forks Count": 'bar',
                    "Stargazers Count": 'bar',
                    "Open Issues": 'bar'
                }
            });
        }
    });
