/**
 * Created by thuan on 12/13/2017.
 */
angular.module('myApp')
    .controller('LogOutController',function ($scope, $state, AuthService,$localStorage) {

        $scope.logout = function () {
            AuthService.logout();
            $scope.isLogin=false;
        };

        if(AuthService.isAuthenticated()){
            $scope.user = $localStorage.user;
            $scope.isLogin=true;
            // console.log($scope.user);
        }
    });