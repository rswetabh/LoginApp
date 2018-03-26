var app= angular.module('starter.controllers',[])

 app.controller('LoginCtrl',function($scope,$http,$state){

    $scope.loginData  = 
    {
    	username : '',
    	password : ''

    }
     $scope.Create = function() {
       $state.go('signup');

     };
     $scope.doLogin = function() {
   		
   		 console.log('Doing login', $scope.loginData);
          $http({
            method:'POST',
            url:'/login',data:{username: $scope.loginData.username,password: $scope.loginData.password}})
		      .success(function(response) {
		         console.log("Login Successful");
		          console.log(response);
              $state.go('dashboard')
		         });
   };

 });

 app.controller('CreateCtrl',function($scope,$http,$timeout,$state) {

      $scope.RegData  = 
    {
      username : '',
      email : '',
      email2: '',
      password : ''

    }
        $scope.doSignUp = function() {
           console.log('Registering Data', $scope.RegData);
            $http({
            method:'POST',
            url:'/register',data:{username: $scope.RegData.username,password: $scope.RegData.password,email : $scope.RegData.email,email2 : $scope.RegData.email2}})
          .success(function(response) {
             console.log("Registration Successful");
            
              console.log(response);
              $timeout(function() {
                   alert("Registration Successful");
                }, 1000);
              $state.go('signin')
             });

          
   };

 });

 app.controller('DashCtrl',function($scope,$http) {

     

 });