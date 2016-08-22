angular.module("LeagueTest").factory("APIService",['$http','$q',function($http,$q){
  return{
    getSummonerChampionMastery : function(name){
      var deferred = $q.defer();
      $http.get('http://localhost/riotapi/config.php?summoner='+name)
      .success(function(data){
        deferred.resolve(data);
      })
      .error(function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    }
  };
}]);
