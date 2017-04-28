<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Connection: keep-alive");
$apikey = 'RGAPI-ff5fb4df-f6ed-4e04-8da4-3a2c4e565cd2';
$summoner = $_REQUEST["summoner"];
$summonerDetails = explode("_",$summoner);
if($summoner!=''){
  $url = 'https://'.$summonerDetails[2].'.api.riotgames.com/lol/summoner/v3/summoners/by-name/'.$summonerDetails[0].'?api_key='.$apikey;
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
  $data = curl_exec($ch);
  curl_close($ch);
  $summonerName = str_replace(' ','',strtolower($summonerDetails[0]));
  $information = json_decode($data,true);
  $summonerId = $information['id'];
  $url = 'https://'.$summonerDetails[2].'.api.riotgames.com/championmastery/location/'.$summonerDetails[2].'/player/'.$summonerId.'/champions?api_key='.$apikey;
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
  $data = curl_exec($ch);
  curl_close($ch);
  echo $data;
}

?>
