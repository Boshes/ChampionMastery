angular.module("ChampionMastery").factory("APIService",['$http','$q',function($http,$q){
  return{
    getSummonerChampionMastery : function(summoner){
      var deferred = $q.defer();
      $http.get('http://localhost/championmastery/templates/config.php?summoner='+summoner)
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
