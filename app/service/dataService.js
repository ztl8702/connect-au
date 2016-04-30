(function () {
    "use strict";
    angular.module('app').factory('DataService', ['$http', '$q','Loki','GeoService', function ($http, $q, Loki, geoService) {
       
        window.allData={};
        var database = new Loki();
        function getData() {
            return $q.when($http.get('/assets/data/data.json').then(function(r){
                return r.data;
            }).catch(function (){
                return $q.reject('error getData');
            }))
        }
        
        
        getData().then(function(data) {
            console.log(data);
            window.allData=data;
           // database.loadJSON(data);
            
        })
        
        function simplifyName(str) {
            var arr = str.split(" ");
            if (arr[arr.length-1][0]=='(')
                arr.splice(-1,1);
            return arr.join(" ");
        }
        
        function fillLocations() {
            Object.keys(allData).forEach(function(suburbName) {
                var simpleName = simplifyName(suburbName);
                geoService.getCoordinates(simpleName, function(co){
                    window.allData[suburbName]['lat'] = co[0];
                    window.allData[suburbName]['lng'] = co[1];
                    console.log(suburbName);
                });
            })
        }
        
        function filterByCountryOfBirth(country) {
            result = {};
            keys(window.allData).forEach(function (suburb){
                currentSub = allData[suburb];
                subSet = currentSub['ByCountry'][country];
                result[suburb] = {
                    country: subSet,
                    "Total": currentSub['ByCountry']['Total']
                };
            });
            return result;
        }
        
        function printall(){
            console.log(window.allData);
        }
        
        return {
            fillLocations: fillLocations,
            printAll: printall
        };
        
    }]);
        
}());