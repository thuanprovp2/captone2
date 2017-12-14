/**
 * Created by thuan on 12/10/2017.
 */
angular.module('myApp')
    .controller('Login', function ($scope, $state, AuthService) {
        if (AuthService.isAuthenticated()) {
            // $state.go('category');
        }
        $scope.user = {
            username: '',
            password: ''
        };
        $scope.login = function () {
            AuthService.login($scope.user);
        }
    });