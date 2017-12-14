/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('AccountController', function ($scope, AuthService, $localStorage, AccountFactory) {
        if (AuthService.isAuthenticated()) {
            console.log($localStorage.user);
            $scope.user = $localStorage.user;
            $scope.temp = {
                oldPassword: '',
                newPassword: 'aaaa',
                newPasswordRe: 'bbbb'
            };
        }

        $scope.saveAccount = function saveAccount() {
            var method = AccountFactory.updateAccount;
            method.call(null, $scope.user)
                .then(alert('Update success!'))
                .catch(function (error) {
                    console.log(error);
                });
        };
        $scope.savePassword = function savePassword() {
            console.log($scope.temp.oldPassword);
            console.log($scope.temp.newPassword);
            console.log($scope.temp.newPasswordRe);
            if ($scope.temp.oldPassword != $scope.user.password) {
                alert("Old password is wrong");
            }
            else {
                if ($scope.temp.newPassword != $scope.temp.newPasswordRe) {
                    alert("New password not matched Re-Password");
                }
                else {
                    $scope.user.password = $scope.temp.newPassword;
                    var method = AccountFactory.updateAccount;
                    method.call(null, $scope.user)
                        .then(alert('Update Password success!'))
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            }
        }
    });