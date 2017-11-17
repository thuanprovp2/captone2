/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('post',{
            parent:'site',
            url:'/post',
            views:{
                'content@':{
                    templateUrl:'src/customer/post/post.html',
                    controller:'PostController'
                }
            }
        })
    });