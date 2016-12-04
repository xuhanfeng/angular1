var app=angular.module('myapp',[]);
app.controller('app',["$scope",function($scope){
	$scope.persons=[
		{'first':"Alice",'last':'cndvndc','tel':'1231231','phone':'13356895623','date':'12311234556'},
		{'first':"cdnk ",'last':'marry','tel':'123456','phone':'456123123','date':'456123123'},
		{'first':"bbfe",'last':'john','tel':'456123','phone':'456123123','date':'123456456'},
		{'first':"vfjk",'last':'gude','tel':'4561123','phone':'1231312323','date':'12345612312'}
	]
	$scope.txt='';
	$scope.search=function(obj){
			if($scope.txt!=''){
				if(obj.first.toLowerCase().indexOf($scope.txt.toLowerCase())!=-1 || obj.phone.toLowerCase().indexOf($scope.txt.toLowerCase())!=-1 || obj.tel.toLowerCase().indexOf($scope.txt.toLowerCase())!=-1 || obj.last.toLowerCase().indexOf($scope.txt.toLowerCase())!=-1 || obj.date.toLowerCase().indexOf($scope.txt.toLowerCase())!=-1){
					return true
				}else{
					return false
				}	
			}else{
				return true
			}
			
		}
	$scope.sort='';
	$scope.pai=false;
	$scope.add=function(event){
		if($scope.sort=event){
			$scope.pai=!$scope.pai;
		};

	}
	$scope.Color=function(event){
		if($scope.sort=event){
			return $scope.pai?'under':'top'
		}
	}			
	
}])