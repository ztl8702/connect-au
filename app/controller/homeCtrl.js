(function () {
    "use strict";
    angular.module('app').controller('homeCtrl', ['$scope', '$rootScope', '$location', "GeoService", 'ConstService', 'DataService', function ($scope, $rootScope, $location, geoService, constService, dataService) {
        
        $scope.suburbList = constService.suburbList;
        $scope.ageList = constService.ageList;
        $scope.countryList = constService.countryList;
        $scope.ancestryList = constService.ancestryList;
        $scope.languageList = constService.languageList;
        $scope.featureClicked = function () {
           $location.path('/recommend/').search({language: $scope.languageValue, country:$scope.countryValue,
                                                age: $scope.ageValue,  ancestry: $scope.ancestryValue});
        };
        
    }]);
}());
