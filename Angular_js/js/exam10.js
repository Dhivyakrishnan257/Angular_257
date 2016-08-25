angular.module('app10',[])
.directive("jqlDirective",function(){
  return function(scope, element, attrs){
    var players=element.children();

    var listOfPlayers="";

    for(i=0;i<players.length;i++){
      if(players.eq(i).text()=="Barry Choi"){
        players.eq(i).css("color","red");

        players.eq(i).attr("number","25");
      }
      if(players.eq(i).text()=="Hank Aaron"){
        players.eq(i).addClass("thick");
            }
      listOfPlayers+=players.eq(i).text()+",";
      angular.element(document.querySelector('#childrenList')).text(listOfPlayers);

    }



  }
})
.controller("mainCtrl",function($scope){

});
