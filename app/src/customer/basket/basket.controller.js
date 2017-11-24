/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('BasketController', function ($scope, BasketFactory) {
        BasketFactory.fetchAllProducts()
            .then(function (response) {
                $scope.products=response.data.data;
                console.log($scope.products);
            })
            .catch(function () {
                $scope.products=[];
            });
    });