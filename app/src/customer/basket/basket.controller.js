/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('BasketController', function ($scope, BasketFactory, AuthService, $localStorage, $rootScope) {
        $scope.total = 0;
        BasketFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products = response.data.data;
                if (AuthService.isAuthenticated()) {
                    $scope.user = $localStorage.user;
                    $scope.basket = $localStorage.basket;
                    $scope.getTotal();
                }
            })
            .catch(function () {
                $scope.products = [];
            });

        $scope.getTotal = function () {
            $scope.total = 0;
            angular.forEach($scope.basket, function (value) {
                if (value.numberProduct <= 0 || value.numberProduct == null) {
                    value.numberProduct = 1;
                }
                $scope.total += value.price * value.numberProduct;
            });
        };

        $scope.removeBasket = function (id) {
            $.each($scope.basket, function (index, value) {
                if (id == value._id) {
                    $scope.basket.splice(index, 1);
                }
                if($scope.basket.length==0){
                    $scope.total = 0;
                }
            });
        }
    });