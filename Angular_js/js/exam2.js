var app2=angular.module('app2',[]);
app2.controller('ctrl1',function($scope){
 $scope.randomnum1=Math.floor((Math.random()*10)+1);
 $scope.randomnum2=Math.floor((Math.random()*10)+1);
});


app2.controller('badctrl',function($scope){
  var badfeelings=["Disregared","Unimportant","Rejected","Powerless"];
  $scope.bad=badfeelings[Math.floor((Math.random()*4))];

});

app2.controller('goodctrl',function($scope){
    var goodfeelings=["Pleasure","Awesome","Lovable","Inner Peace"];
  $scope.good=goodfeelings[Math.floor((Math.random()*4))];

});
