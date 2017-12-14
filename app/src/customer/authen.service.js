/**
 * Created by Thuan on 11/27/2016.
 */
angular.module('myApp')
    .factory('AuthService', function ($http, $state, $localStorage) {
        var isAuthenticated = false;

        function storeUserToken(token) {
            $localStorage.token = token;
            useToken(token);
        }

        function useToken(token) {
            isAuthenticated = true;
            $http.defaults.headers.common['Authorization'] = token;
        }

        function destroyToken() {
            isAuthenticated = false;
            $http.defaults.headers.common.Authorization = undefined;
            $localStorage.token = undefined;
            $localStorage.user = undefined;
            $localStorage.basket = undefined;
        }

        function loadToken() {
            var token = $localStorage.token;
            if (token) {
                useToken(token);
            }
            else {
                destroyToken();
            }
        }

        var login = function (user) {
            $http.post(['http://localhost:8081/', 'login'].join(''), {
                username: user.username,
                password: user.password
            })
                .then(function (response) {
                    console.log(response);

                    isAuthenticated = true;
                    $localStorage.user = response.data.user;
                    $localStorage.basket = [];
                    storeUserToken(response.data.token);
                    if ($localStorage.user.role.name === 'admin') {
                        $('#close-modal').closest('.modal').modal('hide');
                        $('#close-modal').modal('hide');
                        $('#close-modal').click();
                        console.log($localStorage.token);
                        console.log($localStorage.user);
                        // window.location.reload();
                        window.location.assign("http://localhost:63342/TestOnlineAngular-master/src/main/index.html?_ijt=2e25kcsmruq8jvg06o3jok9fgp#/dashboard")
                    }
                    else {
                        $('#close-modal').closest('.modal').modal('hide');
                        $('#close-modal').modal('hide');
                        $('#close-modal').click();
                        window.location.reload();
                        console.log($localStorage)
                    }
                })
                .catch(function (err) {
                    console.log(err);
                    alert(err.data.message);
                })
        };
        var logout = function () {
            destroyToken();
            // window.location.reload();
        };

        loadToken();

        return {
            isAuthenticated: function () {
                return isAuthenticated;
            },
            login: login,
            logout: logout
        }
    });