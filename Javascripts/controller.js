angular.module("LeagueTest").controller("Ctrl",['$scope','$location','APIService',function($scope,$location,APIService){
  require.config({
    paths : {
      text: 'dependencies/text',
      json: 'dependencies/json'
    }
  });
  var champions;
  require(['json!dependencies/champions.json'],function(data){
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
          key: champions.champions[$scope.champions[i].champion].key,
          mastery: $scope.champions[i].mastery,
          points: $scope.champions[i].points,
          nextLevel: $scope.champions[i].nextLevel,
          chests: $scope.champions[i].chests,
          tokens:$scope.champions[i].tokens
        });
      }
      console.log($scope.championDetails);
    })
  }
}]);
