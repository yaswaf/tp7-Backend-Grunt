var personApi = angular.module('personmain', ['ngResource','ui.router']);

// With this you can inject POKEAPI url wherever you want
personApi.constant('POKEAPI', 'http://pokeapi.co');

personApi.directive("mainApp",function(){
	return {
    templateUrl: './Views/main.html'
  };
})


personApi.controller('home', function($scope,getPersons) {
   console.log("home");
   
});

personApi.controller('getCrtl', function($scope,getPersons) {
   console.log("get method");
   getPersons.query(function(data) {
        $scope.people = data;
        console.log(data);
									});
   
});


personApi.controller('postCrtl', function($scope,savePerson) {
	console.log("post method");
	
	$scope.send=function(){

	//var objet='{"nom":\"'+$scope.personNom+'\","prenom":\"'+$scope.personPrenom+'\","mail":\"'+$scope.personMail+'\"}';
	var objet=({
	nom :$scope.personNom,
	prenom:$scope.personPrenom,
	mail:$scope.personMail
	});

	console.log(objet);
	
	savePerson.save(objet,function(data){
		console.log("added succesfully");
	});
	
	}
	
   
});





