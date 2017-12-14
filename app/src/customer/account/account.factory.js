/**
 * Created by thuan on 12/14/2017.
 */
angular.module('myApp')
    .factory('AccountFactory', function ($http) {
        function updateAccount(data) {
            console.log(data);
            return $http.post('http://localhost:8081/user/update', data);
        }
        return {
            updateAccount: updateAccount
        }
    });