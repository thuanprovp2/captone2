/**
 * Created by Thuan on 12/4/2016.
 */
angular.module('myApp')
    .factory('AuthInterceptor', function ($localStorage) {
        return {
            request: request
        };
        
        function request(config) {
            if (config.url.indexOf('http://localhost:8081/') >= 0) {
                config.headers = config.headers || {};
                var token = $localStorage.token;
                if (token) {
                    config.headers.Authorization = token;
                }
            }
            return config;
        }
    });