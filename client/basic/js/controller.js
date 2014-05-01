var PersonCtrl = function($scope){
	$scope.name = 'AngularJS';
	$scope.age = 2;
};

var ShowHideCtrl = function($scope){
	$scope.showed = "YES";
};

var FriendsCtrl = function($scope){
    $scope.friends = [
        { name: '蒙其·D·魯夫', age: 19 }, 
        { name: '羅羅亞·索隆', age: 21 }, 
        { name: '娜美', age: 20 }, 
        { name: '騙人布', age: 19 }
    ];
    
    $scope.add = function(){
        $scope.friends.push({
            name: $scope.pName, 
            age: $scope.pAge
        });
    };
    
    $scope.remove = function(index){
        $scope.friends.splice(index, 1);
    };
};

var angular = angular || {};
var calModule = angular.module('CalModule', []);
calModule.controller('CalCtrl', function($scope){
	$scope.num1 = 1;
	$scope.num2 = 5;
});

var InjectCtrl = function($ng){
	$ng.name = '依賴注入';
};
InjectCtrl.$inject = ['$scope'];

var injectModule = angular.module('InjectModule', []);
injectModule.controller('InjectModuleCtrl', ['$scope', function($ng){
	$ng.name = '依賴注入 from InjectModule';
}]);

var NgIfCtrl = function($scope){
	$scope.show = function(){
		return $scope.checked;
	};
};

var NgCalssCtrl = function($scope){
	$scope.cssClass = { 
		red: 'red', 
		bold: 'bold', 
		italic: 'italic'
	};
 
	$scope.useItalic = 'italic';
};

var NgClassEvenOddCtrl = function($scope){
    $scope.friends = [{
		name: '蒙其·D·魯夫', 
		reward: 400000000
	}, {
		name: '羅羅亞·索隆', 
		reward: 120000000
	}, {
		name: '娜美', 
		reward: 16000000
	}, {
		name: '騙人布', 
		reward: 30000000
	}, {
		name: '香吉士', 
		reward: 77000000
	}, {
		name: '多尼多尼·喬巴', 
		reward: 50
	}, {
		name: '妮可·羅賓', 
		reward: 80000000
	}, {
		name: '佛朗基', 
		reward: 44000000
	}, {
		name: '布魯克', 
		reward: 33000000
	}];
};

var myFilters = angular.module('MyFilters', []);
myFilters.controller('MyFiltersCtrl', function($scope){
	$scope.text = 'Hello Kitty';
});

myFilters.filter('trimAndLowerCase', function(){
	return function(str){
		return str.toLowerCase().replace(/\s+/g, '-');
	};
});

myFilters.filter('trimAndLowerCaseWith', function(){
	return function(str, separator){
		return str.toLowerCase().replace(/\s+/g, separator);
	};
});


var myInterpolation = angular.module('MyInterpolation', []);
myInterpolation.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});

var SubmitCtrl = function($scope){
	$scope.skills = [];
 
	$scope.skill = '';
	$scope.submit = function(){
		if(!!$scope.skill) {
			$scope.skills.push($scope.skill);
		}
		$scope.skill = '';
	}
};