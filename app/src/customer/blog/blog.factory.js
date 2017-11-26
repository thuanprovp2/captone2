/**
 * Created by thuan on 11/25/2017.
 */
angular.module('myApp')
    .factory('BlogFactory', function ($http) {
        var fetchAllBlog = function () {
            return $http.get('http://localhost:8081/article/fetch')
        };
        return {
            fetchAllBlog: fetchAllBlog
        }
    });