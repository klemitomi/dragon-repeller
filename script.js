let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    "text": "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    "text": "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    "text": "You enter the cave. You see some monsters."
  }
];

const weapons = [
  { name: "stick", power: 5 },
  { name: "dagger", power: 30 },
  { name: "claw hammer", power: 50 },
  { name: "sword", power: 100 }
];

//const cat = {
//  name: "Whiskers",
//  "Number of legs": 4,
//}
//console.log(cat["Number of legs"]);

function update(location) {
  button1.innerText = location["button text"][0];
  button1.onclick = location["button functions"][0];
  button2.innerText = location["button text"][1];
  button2.onclick = location["button functions"][1];
  button3.innerText = location["button text"][2];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
}


function goStore() {
  update(locations[1]);
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You don't have enough gold!";
  }
}


function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeaponIndex++;
    goldText.innerText = gold;
    text.innerText = "You now have a " + weapons[currentWeaponIndex].name + ".";
  }
}


function goCave() {
  update(locations[2]);
}

function fightDragon() {
    console.log("Fighting the dragon!");
    text.innerHTML = "A wild dragon appears!";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
}

function fightSlime() {
    console.log("Fighting the slime!");
    text.innerHTML = "A wild slime appears!";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
}


function fightBeast() {
    console.log("Fighting the beast!");
    text.innerHTML = "A wild beast appears!";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
}

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
