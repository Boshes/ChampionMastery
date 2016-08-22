<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Connection: keep-alive");
$apikey = 'RGAPI-65280E50-5D1F-4D46-BEBF-B4E9CC3904B3';
$summoner = $_REQUEST["summoner"];
if($summoner!=''){
  $url = 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/'.$summoner.'?api_key='.$apikey;
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
  $data = curl_exec($ch);
  curl_close($ch);
  $summonerName = str_replace(' ','',strtolower($summoner));
  $information = json_decode($data,true);
  $summonerId = $information[$summonerName]['id'];
  $url = 'https://na.api.pvp.net/championmastery/location/NA1/player/'.$summonerId.'/champions?api_key='.$apikey;
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
  $data = curl_exec($ch);
  curl_close($ch);
  echo $data;
}

?>
