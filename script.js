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

function goTown() {
  button1.innerText = "Buy 10 health (10 gold)";
  button1.onclick = buyHealth;
  button2.innerText = "Buy weapon (30 gold)";
  button2.onclick = buyWeapon;
  button3.innerText = "Go to town square";
  button3.onclick = goTown;
  text.innerText = "You enter the store.";
}   


function goStore() {
  button1.innerText = "Buy 10 health (10 gold)";
  button1.onclick = buyHealth;
  button2.innerText = "Buy weapon (30 gold)";
  button2.onclick = buyWeapon;
  button3.innerText = "Go to town square";
  button3.onclick = goTown;
  text.innerText = "You enter the store.";
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    text.innerText = "You bought 10 health!";
  } else {
    text.innerText = "You don't have enough gold!";
  }
}

function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    let newWeapon = weapons[currentWeaponIndex];
    currentWeaponIndex++;
    inventory.push(newWeapon);
    text.innerText = `You bought a ${newWeapon}!`;
  } else {
    text.innerText = "You don't have enough gold!";
  }
}


function goCave() {
    console.log("Going to cave.");
    text.innerHTML = "You venture into the dark cave...";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
}

function fightDragon() {
    console.log("Fighting the dragon!");
    text.innerHTML = "A wild dragon appears!";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
}

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
