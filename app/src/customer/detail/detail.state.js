/**
 * Created by Huong on 15/9/2016.
 */
angular.module('myApp')
    .config(function ($stateProvider) {
        $stateProvider.state('detail',{
            parent:'site',
            url:'/detail/id=:id',
            views:{
                'content@':{
                    templateUrl:'src/customer/detail/detail.html',
                    controller:'DetailController'
                }
            }
        })
    });