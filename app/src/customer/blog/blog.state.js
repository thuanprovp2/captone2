/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('blog',{
            parent:'site',
            url:'/blog',
            views:{
                'content@':{
                    templateUrl:'src/customer/blog/blog.html',
                    controller:'BlogController'
                }
            }
        })
    });