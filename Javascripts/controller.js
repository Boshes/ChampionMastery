angular.module("ChampionMastery").controller("Ctrl",['$scope','$location','$uibModal','APIService',function($scope,$location,$uibModal,APIService){
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

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $scope.pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    })
  };

  $scope.regions = {
    region: 'region',
    regions: [
      {
        region: 'North America',
        key:'na',
        platform:"na1"
      },
      {
        region:'Europe West',
        key:'euw',
        platform:"euw1"
      },
      {
        region:'Europe North East',
        key:'eune',
        platform:'eun1'
      },
      {
        region:'Brazil',
        key:'br',
        platform:'br1'
      },
      {
        region:'Japan',
        key:'jp',
        platform:'jp1'
      },
      {
        region:'Korea',
        key:'kr',
        platform:'kr'
      },
      {
        region:'Latin America North',
        key:'lan',
        platform:'la1'
      },
      {
        region:'Latin America South',
        key:'las',
        platform:'la2'
      },
      {
        region:'Oceania',
        key:'oce',
        platform:'oc1'
      },
      {
        region:'Turkey',
        key:'tr',
        platform:'tr1'
      },
      {
        region:'Russia',
        key:'ru',
        platform:'ru'
      }
    ]
  };

  $scope.getSummoner = function(){
    if($scope.name=='' || $scope.name==null || $scope.regions.region==null || $scope.regions.region==undefined){
      return;
    }
    for(var i=0; i<$scope.regions.regions.length;i++){
      if($scope.regions.regions[i].key==$scope.regions.region){
        var platform = $scope.regions.regions[i].platform;
      }
    };

    var summonerInformation = $scope.name + '_' + $scope.regions.region + '_' + platform;

    APIService.getSummonerChampionMastery(summonerInformation)
    .then(function(data){
      $scope.error = null;
      $scope.champions = [];
      $scope.championDetails = [];
      if(data.length>0){
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
      }
      else{
        $scope.error = "No Champions with Mastery Levels Found with this Summoner Name.";
      }

      $scope.stats = [
        {
          summonerSearched:$scope.name,
          time: new Date().toUTCString(),
          region: $scope.regions.region,
          coordinates: $scope.pos
        }
      ];
      console.log($scope.stats);
    })
    .catch(function(){
      $scope.error = "No Champions with Mastery Levels Found with this Summoner Name.";
    });
  };

  $scope.openModal = function(champion){
    var modalInstance = $uibModal.open({
      templateUrl : 'templates/modal.html',
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

angular.module('ChampionMastery').controller('ChampionModal',function($scope,$uibModalInstance,champion){
  $scope.champion = champion;
});
