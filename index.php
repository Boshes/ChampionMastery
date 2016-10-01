<!DOCTYPE html>
<html lang="en" ng-app="LeagueTest">
  <head>
    <title>League Test</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="Dependencies/bootstrap.min.css">
    <link rel="stylesheet" href="Styles/styles.css" />
    <script src="Dependencies/jquery-3.1.0.min.js"></script>
    <script src="Dependencies/angular.min.js"></script>
    <script src="Dependencies/bootstrap.min.js"></script>
    <script src="Dependencies/ui-bootstrap-tpls-2.1.4.min.js"></script>
    <script src="Dependencies/require.js"></script>
    <script src="Javascripts/main.js"></script>
    <script src="Javascripts/APIService.js"></script>
    <script src="Javascripts/controller.js"></script>
  </head>
  <body ng-controller="Ctrl">
    <div class="container">
      <h1 class="center-block">Champion Mastery</h1>
      <div ng-form="searchForm">
        <div class="form-group">
          <input type="text" class="form-control" name="name" ng-model="name" />
        </div>
        <button type="submit" class="btn btn-success btn-lg center-block" ng-click="getSummoner()">Search</button>
      </div>
    </div>
    <div class="container">
      <div class="col-xs-2" ng-repeat="champion in championDetails track by $index">
        <img ng-hide="championDetails.length<0" src="http://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/{{champion.key}}.png"
        style="max-width:100px; max-height:100px; margin-top:5px; margin-bottom:5px"
        uib-popover="{{champion.name}}"
        popover-trigger="'mouseenter'">
      </div>
    </div>
  </body>
</html>
