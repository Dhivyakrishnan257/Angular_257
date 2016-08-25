var app5=angular.module('app5',[]);
app5.controller('eventCtrl',function($scope){
$scope.disablebutton="true";

$scope.dayTimeButton="true";

$scope.capitals=[
  {'city':'Montgomery',
  'state':'Alabama'},
{'city':'Juneau',
'state':'Alaska'},
{'city':'Phoenix',
'state':'Arizona'}];

});
