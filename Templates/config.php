<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Connection: keep-alive");
$apikey = 'RGAPI-65280E50-5D1F-4D46-BEBF-B4E9CC3904B3';
$summoner = $_REQUEST["summoner"];
$summonerDetails = explode("_",$summoner);
if($summoner!=''){
  $url = 'https://'.$summonerDetails[1].'.api.pvp.net/api/lol/'.$summonerDetails[1].'/v1.4/summoner/by-name/'.$summonerDetails[0].'?api_key='.$apikey;
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
  $data = curl_exec($ch);
  curl_close($ch);
  $summonerName = str_replace(' ','',strtolower($summonerDetails[0]));
  $information = json_decode($data,true);
  $summonerId = $information[$summonerName]['id'];
  $url = 'https://'.$summonerDetails[1].'.api.pvp.net/championmastery/location/'.$summonerDetails[2].'/player/'.$summonerId.'/champions?api_key='.$apikey;
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
  $data = curl_exec($ch);
  curl_close($ch);
  echo $data;
}

?>
