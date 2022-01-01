//List of all Character Classes
const characterClass = [
  "Cleric",
  "Rogue",
  "Paladin",
  "Fighter",
  "Wizard",
  "Bard",
  "Sorcerer",
  "Barbarian",
  "Monk",
  "Druid",
  "Ranger",
  "Warlock",
];

//List of all the races
const characterRace = [
  "Human",
  "Elf",
  "Dwarf",
  "Half-Orc",
  "Half-Elf",
  "Dragonborn",
  "Gnome",
  "Tiefling",
  "Halfling",
];

//Selecting the ID's for the images
let btn = document.querySelector("#btn");
let charClass = document.querySelector("#charClass");
let charRace = document.querySelector("#charRace");

//const raceTraits = require("race.js");

//Getting Stats
let stats = [];

//rolling a character
const rollCharacter = () => {
  //clearing the stat array for rerolls
  stats = [];
  console.clear();

  //gets the characters stats
  rollStats();

  //character sheet
  const characterSheet = {
    //getting the characters class
    class: rollClass(characterClass),
    //getting the characters race
    race: rollRace(characterRace),
    //placing the characters stats
    stats: placeStats(),
  };

  //selecting the characters class and race images
  const rollImages = () => {
    let charClass1 = "images/class/" + characterSheet.class + ".jpg";
    let charRace1 = "images/race/" + characterSheet.race + ".jpg";
    charClass.setAttribute("src", charClass1);
    charRace.setAttribute("src", charRace1);
  };

  //getting the characters class and race images
  rollImages();

  //Showing the user what class and race they have
  document.getElementById("classes").innerHTML = characterSheet.class;
  document.getElementById("race").innerHTML = characterSheet.race;

  //Showing the user all the stats and their allocations
  document.getElementById("str").innerHTML = characterSheet.stats.str;
  document.getElementById("dex").innerHTML = characterSheet.stats.dex;
  document.getElementById("con").innerHTML = characterSheet.stats.con;
  document.getElementById("int").innerHTML = characterSheet.stats.int;
  document.getElementById("wis").innerHTML = characterSheet.stats.wis;
  document.getElementById("cha").innerHTML = characterSheet.stats.cha;

  //Showing on console the character sheet
  console.table(characterSheet);
};

//rolling the class
const rollClass = () => {
  //figuring out what class the user will get
  var rngClass = Math.floor(Math.random() * characterClass.length);

  //showing the actual class it got
  var randClass = characterClass[rngClass];
  return randClass;
};
const rollRace = () => {
  //console.log(characterRace);
  //figuring out what race the user will get
  var rngRace = Math.floor(Math.random() * characterRace.length);

  //showing the actual class it got
  var randRace = characterRace[rngRace];

  //checking if it worked
  // console.log(rngRace);
  // console.log(randRace);

  return randRace;
};

//rolling the stats
const rollStats = () => {
  //let statsRolled = [];
  for (let i = 0; i < 6; i++) {
    //setting the parameters of the random number
    var rngStat = 1 + Math.floor(Math.random() * 20);
    //making sure the stat they get isn't below 10
    while (rngStat < 10) {
      rngStat = 1 + Math.floor(Math.random() * 20);
    }
    //inserting the stat
    stats.push(rngStat);
    for (let j = 0; j < 0; j++) {
      stats.pop(j);
    }
  }
  //placing the stats
  placeStats(stats);
};

const placeStats = () => {
  // Shuffing stat placements
  shuffleStats(stats);
  //The stat sheet
  const statSheet = {
    str: stats[0],
    dex: stats[1],
    con: stats[2],
    int: stats[3],
    wis: stats[4],
    cha: stats[5],
  };
  return statSheet;
};

//How the stats get randomly placed
function shuffleStats(stats) {
  for (let i = stats.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [stats[i], stats[j]] = [stats[j], stats[i]];
  }
}
