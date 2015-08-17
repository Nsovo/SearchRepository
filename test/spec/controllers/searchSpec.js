'use strict';

describe('Controller: SearchCtrl', function () {

    // load the controller's module
    beforeEach(module('projectsApp'));

    var SearchCtrl,
        scope, location;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $location) {
        scope = $rootScope.$new();
        location = $location;
        SearchCtrl = $controller('SearchCtrl', {
            $scope: scope
        });
    }));

    it('exists', function () {
        expect(SearchCtrl).not.toBeNull();
    });

    it('should have  a label search ny name', function () {
        scope.load();
        expect(scope.searchLabel).toBe("Search by repository name");
    });

    it('should have a method to check if the path is active', function () {
        location.path('/search');
        expect(location.path()).toBe('/search');
    });
});
