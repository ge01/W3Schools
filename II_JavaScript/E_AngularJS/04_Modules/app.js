// AngularJS modules define applications:
var app = angular.module('myApp', []);

// AngularJS controllers control applications:
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

app.directive("w3TestDirective", function(){
  return{
    template : "I was made in a directive constructor!"
  };
});
