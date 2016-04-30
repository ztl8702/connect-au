(function () {
    "use strict";
    angular.module('app').factory('GeoService', ['$http', '$q',function ($http, $q) {
        return {
            getCoordinates: getCoordinates
        };
        var geocoder;
        
        function getCoordinates(address, funcCallback) {
            geocoder = geocoder || new google.maps.Geocoder();
            geocoder.geocode( { 'address': address}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    funcCallback([results[0].geometry.location.lat(), ,results[0].geometry.location.lng()]);
                } else {
                    console.log("Geocode was not successful for the following reason: " + status);
                }
            });
        }
        
    }]);
        
}());