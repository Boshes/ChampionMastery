angular.module("LeagueTest").controller("Ctrl",['$scope','$location','$uibModal','APIService',function($scope,$location,$uibModal,APIService){
  require.config({
    paths : {
      text: 'dependencies/text',
      json: 'dependencies/json'
    }
  });
  var champions;
  require(['json!Dependencies/champions.json'],function(data){
      champions = data;
  });

  $scope.getSummoner = function(){
    APIService.getSummonerChampionMastery($scope.name)
    .then(function(data){
      $scope.champions =[];
      $scope.championDetails = [];
      for(var i=0;i<data.length;i++){
        $scope.champions.push({
          champion: data[i].championId,
          mastery: data[i].championLevel,
          points: data[i].championPoints,
          nextLevel: data[i].championPointsUntilNextLevel,
          chests: data[i].chestGranted,
          tokens: data[i].tokensEarned
        });
      }
      for(var i=0;i<$scope.champions.length;i++){
        $scope.championDetails.push({
          name: champions.champions[$scope.champions[i].champion].name,
          title: champions.champions[$scope.champions[i].champion].title,
          key: champions.champions[$scope.champions[i].champion].key,
          mastery: $scope.champions[i].mastery,
          points: $scope.champions[i].points,
          nextLevel: $scope.champions[i].nextLevel,
          chests: $scope.champions[i].chests,
          tokens:$scope.champions[i].tokens,
          maxLevelValue: $scope.champions[i].points + $scope.champions[i].nextLevel
        });
      }
      console.log($scope.championDetails);
    })
  };

  $scope.openModal = function(champion){
    console.log(champion);
    var modalInstance = $uibModal.open({
      templateUrl : 'styles/modal.html',
      controller : 'ChampionModal',
      size : 'md',
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      animation : true,
      resolve : {
        champion : function(){
          return champion;
        }
      }
    });
  };

}]);

angular.module('LeagueTest').controller('ChampionModal',function($scope,$uibModalInstance,champion){
  $scope.champion = champion;
});
