(function () {
    "use strict";
    angular.module('app').controller('recommendCtrl', ['$scope', '$rootScope', '$http','$location', "GeoService", 'ConstService', 'DataService', '$routeParams',function ($scope, $rootScope,$http, $location, geoService, constService, dataService,$routeParams) {
        $scope.result = [
            "Burwood (A)",

            "Hurstville (C)",

            "Auburn (C)",

            "Kogarah (C)",

            "Melbourne (C)",

            "Strathfield (A)",

            "Ryde (C)",

            "Ashfield (A)",
   

            "Monash (C)",
   

            "Willoughby (C)",
   

            "Sydney (C)",
    
            "Whitehorse (C)",
     

            "Parramatta (C)",
      

            "Canterbury (C)",
      
            "Manningham (C)",
     
            "Rockdale (C)"];
        $scope.age = $routeParams.age;
            $scope.country = $routeParams.country;
            $scope.ancestry = $routeParams.ancestry;
            $scope.language = $routeParams.language;
            $http.defaults.headers.common.Authorization = 'Bearer BMSD0vW1jcW4lo1A9AhYkzNUl5GgBwkXeXqcw2raPcAy8Uz74BkiZDMR+p4BkmgyyQZpbCZOzELr2JTLcI3zrw==';
            $http.defaults.headers.common.Accept = 'application/json';
            var req= {method: 'POST',
 url: 'https://ussouthcentral.services.azureml.net/workspaces/0ed07effc18d4d6aaab00c5e1bfa78c6/services/6383bd32690b438dbc1ff5ef7c91a22b/execute?api-version=2.0&details=true',
 headers: {
   'Content-Type': 'application/json'
 },
 data: {
  "GlobalParameters": {
    "Data": "30-34 years",
    "Data1": "Chinese ",
    "Data2": "China (excl. SARs and Taiwan)(b)",
    "Data3": "Arabic"
  }
}};
        $http(req).then(function(r){console.log(r)}, function(r){console.log('error')});
    }]);
}());
