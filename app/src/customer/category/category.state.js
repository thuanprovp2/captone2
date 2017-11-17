/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('category',{
            parent:'site',
            url:'/category',
            views:{
                'content@':{
                    templateUrl:'src/customer/category/category.html',
                    controller:'CategoryController'
                }
            }
        })
    });