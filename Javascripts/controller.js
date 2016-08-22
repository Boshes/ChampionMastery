angular.module("LeagueTest").controller("Ctrl",['$scope','$location','APIService',function($scope,$location,APIService){
  var champions = {
        266: {
           "title": "the Darkin Blade",
           "name": "Aatrox"
        },
        412: {
           "title": "the Chain Warden",
           "name": "Thresh"
        },
        23: {
           "title": "the Barbarian King",
           "name": "Tryndamere"
        },
        79: {
           "title": "the Rabble Rouser",
           "name": "Gragas"
        },
        69: {
           "title": "the Serpent's Embrace",
           "name": "Cassiopeia"
        },
        136: {
           "title": "The Star Forger",
           "name": "Aurelion Sol"
        },
        13: {
           "title": "the Rune Mage",
           "name": "Ryze"
        },
        78: {
           "title": "Keeper of the Hammer",
           "name": "Poppy"
        },
        14: {
           "title": "The Undead Juggernaut",
           "name": "Sion"
        },
        1: {
           "title": "the Dark Child",
           "name": "Annie"
        },
        202: {
           "title": "the Virtuoso",
           "name": "Jhin"
        },
        43: {
           "title": "the Enlightened One",
           "name": "Karma"
        },
        111: {
           "title": "the Titan of the Depths",
           "name": "Nautilus"
        },
        240: {
           "title": "the Cantankerous Cavalier",
           "name": "Kled"
        },
        99: {
           "title": "the Lady of Luminosity",
           "name": "Lux"
        },
        103: {
           "title": "the Nine-Tailed Fox",
           "name": "Ahri"
        },
        2: {
           "title": "the Berserker",
           "name": "Olaf"
        },
        112: {
           "title": "the Machine Herald",
           "name": "Viktor"
        },
        34: {
           "title": "the Cryophoenix",
           "name": "Anivia"
        },
        27: {
           "title": "the Mad Chemist",
           "name": "Singed"
        },
        86: {
           "title": "The Might of Demacia",
           "name": "Garen"
        },
        127: {
           "title": "the Ice Witch",
           "name": "Lissandra"
        },
        57: {
           "title": "the Twisted Treant",
           "name": "Maokai"
        },
        25: {
           "title": "Fallen Angel",
           "name": "Morgana"
        },
        28: {
           "title": "the Widowmaker",
           "name": "Evelynn"
        },
        105: {
           "title": "the Tidal Trickster",
           "name": "Fizz"
        },
        74: {
           "title": "the Revered Inventor",
           "name": "Heimerdinger"
        },
        238: {
           "title": "the Master of Shadows",
           "name": "Zed"
        },
        68: {
           "title": "the Mechanized Menace",
           "name": "Rumble"
        },
        82: {
           "title": "the Iron Revenant",
           "name": "Mordekaiser"
        },
        37: {
           "title": "Maven of the Strings",
           "name": "Sona"
        },
        96: {
           "title": "the Mouth of the Abyss",
           "name": "Kog'Maw"
        },
        55: {
           "title": "the Sinister Blade",
           "name": "Katarina"
        },
        117: {
           "title": "the Fae Sorceress",
           "name": "Lulu"
        },
        22: {
           "title": "the Frost Archer",
           "name": "Ashe"
        },
        30: {
           "title": "the Deathsinger",
           "name": "Karthus"
        },
        12: {
           "title": "the Minotaur",
           "name": "Alistar"
        },
        122: {
           "title": "the Hand of Noxus",
           "name": "Darius"
        },
        67: {
           "title": "the Night Hunter",
           "name": "Vayne"
        },
        110: {
           "title": "the Arrow of Retribution",
           "name": "Varus"
        },
        77: {
           "id": 77,
           "title": "the Spirit Walker",
           "name": "Udyr"
        },
        89: {
           "title": "the Radiant Dawn",
           "name": "Leona"
        },
        126: {
           "title": "the Defender of Tomorrow",
           "name": "Jayce"
        },
        134: {
           "title": "the Dark Sovereign",
           "name": "Syndra"
        },
        80: {
           "title": "the Artisan of War",
           "name": "Pantheon"
        },
        92: {
           "title": "the Exile",
           "name": "Riven"
        },
        121: {
           "title": "the Voidreaver",
           "name": "Kha'Zix"
        },
        42: {
           "title": "the Daring Bombardier",
           "name": "Corki"
        },
        268: {
           "title": "the Emperor of the Sands",
           "name": "Azir"
        },
        51: {
           "title": "the Sheriff of Piltover",
           "name": "Caitlyn"
        },
        76: {
           "title": "the Bestial Huntress",
           "name": "Nidalee"
        },
        85: {
           "title": "the Heart of the Tempest",
           "name": "Kennen"
        },
        3: {
           "title": "the Sentinel's Sorrow",
           "name": "Galio"
        },
        45: {
           "title": "the Tiny Master of Evil",
           "name": "Veigar"
        },
        432: {
           "title": "the Wandering Caretaker",
           "name": "Bard"
        },
        150: {
           "title": "the Missing Link",
           "name": "Gnar"
        },
        90: {
           "title": "the Prophet of the Void",
           "name": "Malzahar"
        },
        104: {
           "title": "the Outlaw",
           "name": "Graves"
        },
        254: {
           "title": "the Piltover Enforcer",
           "name": "Vi"
        },
        10: {
           "title": "The Judicator",
           "name": "Kayle"
        },
        39: {
           "title": "the Will of the Blades",
           "name": "Irelia"
        },
        64: {
           "title": "the Blind Monk",
           "name": "Lee Sin"
        },
        420: {
           "title": "the Kraken Priestess",
           "name": "Illaoi"
        },
        60: {
           "title": "the Spider Queen",
           "name": "Elise"
        },
        106: {
           "title": "the Thunder's Roar",
           "name": "Volibear"
        },
        20: {
           "title": "the Yeti Rider",
           "name": "Nunu"
        },
        4: {
           "title": "the Card Master",
           "name": "Twisted Fate"
        },
        24: {
           "title": "Grandmaster at Arms",
           "name": "Jax"
        },
        102: {
           "title": "the Half-Dragon",
           "name": "Shyvana"
        },
        429: {
           "title": "the Spear of Vengeance",
           "name": "Kalista"
        },
        36: {
           "title": "the Madman of Zaun",
           "name": "Dr. Mundo"
        },
        131: {
           "title": "Scorn of the Moon",
           "name": "Diana"
        },
        223: {
           "title": "the River King",
           "name": "Tahm Kench"
        },
        63: {
           "title": "the Burning Vengeance",
           "name": "Brand"
        },
        113: {
           "title": "the Winter's Wrath",
           "name": "Sejuani"
        },
        8: {
           "title": "the Crimson Reaper",
           "name": "Vladimir"
        },
        154: {
           "title": "the Secret Weapon",
           "name": "Zac"
        },
        421: {
           "title": "the Void Burrower",
           "name": "Rek'Sai"
        },
        133: {
           "title": "Demacia's Wings",
           "name": "Quinn"
        },
        84: {
           "title": "the Fist of Shadow",
           "name": "Akali"
        },
        163: {
           "title": "the Stoneweaver",
           "name": "Taliyah"
        },
        18: {
           "title": "the Yordle Gunner",
           "name": "Tristana"
        },
        120: {
           "title": "the Shadow of War",
           "name": "Hecarim"
        },
        15: {
           "title": "the Battle Mistress",
           "name": "Sivir"
        },
        236: {
           "title": "the Purifier",
           "name": "Lucian"
        },
        107: {
           "title": "the Pridestalker",
           "name": "Rengar"
        },
        19: {
           "title": "the Blood Hunter",
           "name": "Warwick"
        },
        72: {
           "title": "the Crystal Vanguard",
           "name": "Skarner"
        },
        54: {
           "title": "Shard of the Monolith",
           "name": "Malphite"
        },
        157: {
           "title": "the Unforgiven",
           "name": "Yasuo"
        },
        101: {
           "title": "the Magus Ascendant",
           "name": "Xerath"
        },
        17: {
           "title": "the Swift Scout",
           "name": "Teemo"
        },
        75: {
           "title": "the Curator of the Sands",
           "name": "Nasus"
        },
        58: {
           "title": "the Butcher of the Sands",
           "name": "Renekton"
        },
        119: {
           "title": "the Glorious Executioner",
           "name": "Draven"
        },
        35: {
           "title": "the Demon Jester",
           "name": "Shaco"
        },
        50: {
           "title": "the Master Tactician",
           "name": "Swain"
        },
        91: {
           "title": "the Blade's Shadow",
           "name": "Talon"
        },
        40: {
           "title": "the Storm's Fury",
           "name": "Janna"
        },
        115: {
           "title": "the Hexplosives Expert",
           "name": "Ziggs"
        },
        245: {
           "title": "the Boy Who Shattered Time",
           "name": "Ekko"
        },
        61: {
           "title": "the Lady of Clockwork",
           "name": "Orianna"
        },
        114: {
           "title": "the Grand Duelist",
           "name": "Fiora"
        },
        9: {
           "title": "the Harbinger of Doom",
           "name": "Fiddlesticks"
        },
        31: {
           "title": "the Terror of the Void",
           "name": "Cho'Gath"
        },
        33: {
           "title": "the Armordillo",
           "name": "Rammus"
        },
        7: {
           "title": "the Deceiver",
           "name": "LeBlanc"
        },
        16: {
           "title": "the Starchild",
           "name": "Soraka"
        },
        26: {
           "title": "the Chronokeeper",
           "name": "Zilean"
        },
        56: {
           "title": "the Eternal Nightmare",
           "name": "Nocturne"
        },
        222: {
           "title": "the Loose Cannon",
           "name": "Jinx"
        },
        83: {
           "title": "the Gravedigger",
           "name": "Yorick"
        },
        6: {
           "title": "the Headsman's Pride",
           "name": "Urgot"
        },
        203: {
           "title": "The Eternal Hunters",
           "name": "Kindred"
        },
        21: {
           "title": "the Bounty Hunter",
           "name": "Miss Fortune"
        },
        62: {
           "title": "the Monkey King",
           "name": "Wukong"
        },
        53: {
           "title": "the Great Steam Golem",
           "name": "Blitzcrank"
        },
        98: {
           "title": "the Eye of Twilight",
           "name": "Shen"
        },
        201: {
           "title": "the Heart of the Freljord",
           "name": "Braum"
        },
        5: {
           "title": "the Seneschal of Demacia",
           "name": "Xin Zhao"
        },
        29: {
           "title": "the Plague Rat",
           "name": "Twitch"
        },
        11: {
           "title": "the Wuju Bladesman",
           "name": "Master Yi"
        },
        44: {
           "title": "the Shield of Valoran",
           "name": "Taric"
        },
        32: {
           "title": "the Sad Mummy",
           "name": "Amumu"
        },
        41: {
           "title": "the Saltwater Scourge",
           "name": "Gangplank"
        },
        48: {
           "title": "the Troll King",
           "name": "Trundle"
        },
        38: {
           "title": "the Void Walker",
           "name": "Kassadin"
        },
        161: {
           "title": "the Eye of the Void",
           "name": "Vel'Koz"
        },
        143: {
           "title": "Rise of the Thorns",
           "name": "Zyra"
        },
        267: {
           "title": "the Tidecaller",
           "name": "Nami"
        },
        59: {
           "title": "the Exemplar of Demacia",
           "name": "Jarvan IV"
        },
        81: {
           "title": "the Prodigal Explorer",
           "name": "Ezreal"
        }
  };
  $scope.getSummoner = function(){
    APIService.getSummonerChampionMastery($scope.name)
    .then(function(data){
      $scope.champions =[];
      $scope.championNames = [];
      for(var i=0;i<data.length;i++){
        $scope.champions.push(data[i].championId);
      }
      for(var i=0;i<$scope.champions.length;i++){
        // $obj = champions[$scope.champions[i]].name;
        // console.log($obj);

        $scope.championNames.push(champions[$scope.champions[i]].name);
      }

      // console.log($scope.champions);
      console.log($scope.championNames);
      // for(var i=0;i<$scope.champions.length;i++){
      //   if($scope.champions[i].championId in
      // }
      // console.log(data);
      // $scope.champions = data.championId;
      // var summonerObject = JSON.parse(data);
      // console.log(summonerObject);
      // $scope.champions = summonerObject;
      // var summoner = getSummonerNameInfo($scope.name);
      // $scope.summonername = summonerObject[summoner].name;
      // APIService.getSummonerChampionMastery($scope.name)
      // .then(function(data){
      //   var championMasteryObject = JSON.parse(data);
      //   console.log(championMasteryObject);
      //   $scope.champions = championMasteryObject;
      // })
    })
  }
  // getSummonerNameInfo = function(summoner){
  //   summonername = summoner.toLowerCase().replace(' ','');
  //   return summonername;
  // }
}]);
