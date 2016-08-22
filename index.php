<!DOCTYPE html>
<html lang="en" ng-app="LeagueTest">
  <head>
    <title>League Test</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="Dependencies/bootstrap.min.css">
    <script src="Dependencies/jquery-3.1.0.min.js"></script>
    <script src="Dependencies/angular.min.js"></script>
    <script src="Dependencies/bootstrap.min.js"></script>
    <script src="Javascripts/main.js"></script>
    <script src="Javascripts/APIService.js"></script>
    <script src="Javascripts/controller.js"></script>
  </head>
  <body ng-controller="Ctrl">
    <div ng-form="searchForm">
      <div class="form-group">
        <input type="text" class="form-control" name="name" ng-model="name" />
      </div>
      <button type="submit" class="btn btn-success btn-lg" ng-click="getSummoner()">Search</button>
    </div>
    <div>
      <!-- {{summonername}} -->
    </div>
    <div>
      <li ng-repeat="champion in championNames">{{champion}}
      </li>
    </div>
  </body>
</html>
