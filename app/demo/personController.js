var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
});

var myFilterApp = angular.module('myFilterApp', []);
myFilterApp.controller('costCtrl', function($scope) {
    $scope.quantity = 1;
    $scope.price = 9.99;
});

angular.module('nameApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});

var reverseApp = angular.module('reverseApp', []);
reverseApp.controller('myCtrl', function($scope) {
    $scope.msg = "Runoob";
});
reverseApp.filter('reverse', function() { //可以注入依赖
    return function(text) {
        return text.split("").reverse().join("");
    }
});