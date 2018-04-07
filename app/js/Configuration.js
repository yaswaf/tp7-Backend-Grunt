personApi.config(['$resourceProvider',function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;

   
}]);

personApi.config(function($stateProvider,$urlRouterProvider,$httpProvider){

   // >====================================== new 
		$stateProvider.state('getMethod',{

        url : '/get',
        templateUrl:'views/byGET.html',
        controller:'getCrtl',
        title : 'get Detail'

		});
		
		$stateProvider.state('postMethod',{

        url : '/post',
        templateUrl:'views/byPOST.html',
        controller:'postCrtl',
        title : 'post Detail'

		});
    // ================================================< new 


        $stateProvider.state('home',{

        url : '',
        templateUrl:'views/home.html',
        controller:'home',
        title : 'Home'
		});
    
	

});