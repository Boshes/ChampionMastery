<!DOCTYPE html>
<html lang="en" ng-app="ChampionMastery">
  <head>
    <title>Champion Mastery</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="Dependencies/bootstrap.min.css">
    <link rel="stylesheet" href="Styles/styles.css" />
    <script src="Dependencies/jquery-3.1.0.min.js"></script>
    <script src="Dependencies/angular.min.js"></script>
    <script src="Dependencies/bootstrap.min.js"></script>
    <script src="Dependencies/ui-bootstrap-tpls-2.1.4.min.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDLLNO7s01c0OQWmEEZ_SotiQCFpAhwnyg&sensor=false&extension=.js&output=embed"></script>
    <script src="Dependencies/require.js"></script>
    <script src="Javascripts/main.js"></script>
    <script src="Javascripts/championheader.js"></script>
    <script src="Javascripts/APIService.js"></script>
    <script src="Javascripts/controller.js"></script>
  </head>
  <body ng-controller="Ctrl" class="wrapper">
    <championheader></championheader>
    <div class="container">
      <div ng-form="searchForm" ng-class="{'has-error':(searchForm.name.$invalid && searchForm.name.$dirty) || (searchForm.region.$invalid && searchForm.region.$dirty)}">
        <div class="input-group">
          <span class="input-group-addon">Summoner Name</span>
          <input type="text" class="form-control" name="name" ng-model="name" />
          <span class="input-group-addon">Region</span>
          <span class="input-group-addon" style="width:0px; padding-left:0px; padding-right:0px; border:none;"></span>
          <select class="form-control"
            name="region"
            ng-options="region.key as region.region for region in regions.regions"
            ng-model="regions.region">
          </select>
        </div>
        <br />
        <div uib-alert type="danger"
          class="center-block text-center"
          ng-class="'alert-danger'"
          ng-show="name=='' || region==''">No Information Entered</div>
        <button type="submit" class="btn btn-success btn-lg center-block" ng-click="getSummoner(name,region)" ng-disabled="name=='' || region==''">Search</button>
      </div>
    </div>
    <div class="container">
      <div ng-repeat="champion in championDetails track by $index">
        <div class="col-xs-2">
          <img ng-src="http://ddragon.leagueoflegends.com/cdn/6.20.1/img/champion/{{champion.key}}.png"
          style="max-width:100px; max-height:100px; margin-top:5px; margin-bottom:5px"
          uib-popover="{{champion.name}}"
          ng-click="openModal(champion)"
          popover-trigger="'mouseenter'">
        </div>
      </div>
      <br />
      <div ng-show="!championDetails.length" class="text-center"><i><em ng-bind="error"></em></i>
    </div>
  </body>
</html>
