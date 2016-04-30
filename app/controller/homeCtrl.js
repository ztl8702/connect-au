(function () {
    "use strict";
    angular.module('app').controller('homeCtrl', ['$scope', '$rootScope', '$location', "GeoService", 'ConstService', 'DataService', function ($scope, $rootScope, $location, geoService, constService, dataService) {
        
        $scope.suburbList = constService.suburbList;
        $scope.ageList = constService.ageList;
        $scope.countryList = constService.countryList;
        $scope.featureClicked = function () {
           dataService.printAll();
            console.log("printed");
        };
        $scope.feature2Clicked = function () {
           dataService.fillLocations()
        
        }
        
    }]);
}());
