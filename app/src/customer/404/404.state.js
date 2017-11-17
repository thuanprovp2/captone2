/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('404',{
            parent:'site',
            url:'/404',
            views:{
                'content@':{
                    templateUrl:'src/customer/404/404.html',
                    controller:'404Controller'
                }
            }
        })
    });