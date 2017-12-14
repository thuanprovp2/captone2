/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .controller('PostController',function ($scope,PostFactory,$stateParams) {
        // console.log(IndexService.fetchAllProducts());
        // IndexService.fetchAllProducts()
        //     .then(function (response) {
        //         $scope.products=response.data;
        //         console.log($scope.products);
        //     })
        //     .catch(function () {
        //         $scope.products=[];
        //     });

        PostFactory.fetchAllArticle()
            .then(function (response) {
                $scope.posts = response.data.data;
                $.each($scope.posts,function () {
                    if(this._id==$stateParams.id){
                        $scope.item=this;
                        console.log($scope.item.description);
                        $('#contentArticle').html($scope.item.description);
                    }
                });

                console.log($scope.item);
            })
            .catch(function () {
                $scope.posts = [];
            });
    });