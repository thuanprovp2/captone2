/**
 * Created by thuan on 11/25/2017.
 */
angular.module('myApp')
    .factory('PostFactory', function ($http) {
        var fetchAllArticle=function () {
            return $http.get('http://localhost:8081/article/fetch')
        };
        return {
            fetchAllArticle:fetchAllArticle
        }
    });