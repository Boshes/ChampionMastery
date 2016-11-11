angular.module('LeagueTest').directive('championheader',function(){
  return{
    restrict: 'E',
    controller: 'Ctrl',
    templateUrl: "templates/header.html"
  }
});
