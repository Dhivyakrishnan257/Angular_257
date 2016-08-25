var app8=angular.module('app8',[]);

app8.controller('mainCtrl',function(){
  this.name="Animal";
  this.sound="Grrr";

  this.animalClick=function(){
    alert(this.name+ " says "+this.sound);
  };
});

app8.controller('dogCtrl',function($controller){
  var childCtrl=this;

  childCtrl.child=$controller('mainCtrl',{});

  childCtrl.child.name="Dog";

  childCtrl.child.bark="Woof";

  childCtrl.child.dogData=function(){
    alert(this.name+"says"+this.sound+"and"+this.bark);
  }
});
