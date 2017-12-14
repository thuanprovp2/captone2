/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('BlogController',function ($scope,BlogFactory) {
        // console.log(IndexService.fetchAllProducts());
        // IndexService.fetchAllProducts()
        //     .then(function (response) {
        //         $scope.products=response.data;
        //         console.log($scope.products);
        //     })
        //     .catch(function () {
        //         $scope.products=[];
        //     });

        BlogFactory.fetchAllBlog()
            .then(function (response) {
                console.log(response.data.data);
                $scope.blogs=response.data;

            })
            .catch(function () {
                $scope.blogs=[];
            });
    });