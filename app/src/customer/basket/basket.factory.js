/**
 * Created by thuan on 11/23/2017.
 */
angular.module('myApp')
    .factory('BasketFactory', function ($http) {
        var fetchAllProducts=function () {
            return $http.get('http://localhost:8081/product/fetch')
        };
        return {
            fetchAllProducts:fetchAllProducts
        }
    });