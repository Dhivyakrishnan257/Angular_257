var app3=angular.module('app3',[]);
app3.controller('gListCtrl',function($scope){

$scope.groceries=[
  {item:"Tomatoes", purchased:false},
  {item:"Tomatoes", purchased:false},
  {item:"Tomatoes", purchased:false},
  {item:"Tomatoes", purchased:false},
  {item:"Apples", purchased:true},
];
$scope.getList=function()
{
  return $scope.showList ? "ulgrocery.html" : "grocery.html";
};
});
