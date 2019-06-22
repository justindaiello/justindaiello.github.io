//==================
//Character objects. Holds a random generated name and hit point information. Also includes functions for battle for each class.
//==================
const character = {
  name: name,
  hitPoints: 30,
  fight: () => {
    let hitPower = Math.floor(Math.random() * 4) + 5;
    $('.game-board div').eq(7).text(`You use your axe to hit ${troll.name} for ${hitPower} damage!`).hide().fadeIn(1000);
    troll.hitPoints -= hitPower;
    checkHitPoints();
    setTimeout(() =>{
      troll.fight2();
    }, 2000);
    checkHitPoints();
    updates();
  },
  spell: () => {
    let hitPower = Math.floor(Math.random() * 4) + 6;
    $('.game-board div').eq(7).text(`You cast Magic Missle on ${troll.name} for ${hitPower} damage!`).hide().fadeIn(1000);
    troll.hitPoints -= hitPower;
    checkHitPoints();
    setTimeout(() =>{
      troll.fight2();
    }, 2000);
    checkHitPoints();
    updates();
  }
}

const troll = {
  name: 'an Angry Troll',
  hitPoints: 20,
  fight: () => {
    let hitPower = Math.floor(Math.random() * 4) + 3;
    $('.game-board').append($('<div>').addClass('white-text').text(`${troll.name} ambushes you and hits you for ${hitPower} damage!`).hide().fadeIn(1000))
    character.hitPoints -= hitPower;
    updates();
  },
  fight2: () => {
    let hitPower = Math.floor(Math.random() * 4) + 3;
     $('.game-board div').eq(6).text(`An Angry Troll hits you with its club for ${hitPower} damage!`).hide().fadeIn(1000);
     character.hitPoints -= hitPower;
     setTimeout(() => {
     $('.game-board div').eq(7).text('Will you cast a spell, attack with a weapon, or flee?').hide().fadeIn(1000);
   }, 2000);
     updates();
  }
}


//Name Arrays for the randomizer to choose from. Names are taken from the D&D 5th edition manual
const nameArr1 = ['Adrik', 'Eberk', 'Fargrim', 'Gunnloda', 'Adran', 'Himo', 'Rolen', 'Varis', 'Bree', 'Nedda', 'Verna', 'Portia', 'Perrin', 'Eldon', 'Khalid', 'Ramas', 'Surina', 'Mehen', 'Donaar', 'Heskan'];

const nameArr2 = ['Goodbarrel', 'Greenbottle', 'High-hill', 'Tealeaf', 'Brushgather', 'Gemflower', 'Moonbrook', 'Diamonddew', 'Moonwhisper', 'Starflower', 'Battlehammer', 'Frostbeard', 'Ironfist', 'Fireforge', 'Thokk', 'Dispair', 'Sorrow', 'Stumbleduck', 'Badger', 'Sparklegem']

//==================
//Function to randomize a name from the 2 name arrays. Generates a random number based on the length of the array and concatenates the strings associated with the random index numbers
//==================
const randomizer = () => {
  let firstName = nameArr1[Math.floor(Math.random() * nameArr1.length)];
  let lastName = nameArr2[Math.floor(Math.random() * nameArr2.length)];
  $('.name').text(`${firstName} ${lastName}`).hide().fadeIn(1000);
  character.name = `${firstName} ${lastName}`
  gameScript();
}


//===================
//Function to check hitpoints for the hero and the troll and end the game if one reaches 0
//===================
const checkHitPoints = () => {
  if (character.hitPoints <= 0) {
    alert('you lose!');
    return;
  } if (troll.hitPoints <= 0) {
    alert('you win!');
    return;
  }
}

//====================
//Function to update health bar after each round of fighting. Takes updated health from the character and troll objects and uses jQuery to append the data to the DOM
//====================
const updates = () => {
  $('#my-health').text(character.hitPoints);
  $('#troll-health').text(troll.hitPoints);
}

//====================
//Initial script to run the game. Welcomes the player then uses some delays to introduce the enemy, stage an attack by the enemy, give the player options on what to do next by making hidden buttons appear.
//====================
const gameScript = () => {
  $('.white-text').text(`Welcome ${character.name}`).hide().fadeIn(1000).delay(5000);
  //sets delay between first and second line of text
  setTimeout(() => {
    $('.game-board').append($('<div>').addClass('game-text').text('A formidable foe approaches in the distance...').hide().fadeIn(1000))
  }, 2000);
  //Gives the troll the first attack on the player after a quick delay
  setTimeout(() => {
    troll.fight();
  }, 4000);
  setTimeout(() => {
    $('.game-board').append($('<div>').addClass('game-text').text('Will you cast a spell, attack with a weapon, or flee?').hide().fadeIn(1000))
  }, 6000);
  setTimeout(() => {
    $('.btn-div, .health-bars').css('display', 'flex').hide().fadeIn(1000);
  }, 8000);
  updates();
}


$ (() => {

//Listener to generate a random name when Generate button is pressed.
$('.name-btn').on('click', randomizer);
//Listener to activate the weapon attack function for the game.
$('.weapon').on('click', character.fight);
//Listener to activate the spell attack function for the game.
$('.spell').on('click', character.spell);
//Listener to reset the game when the flee button is clicked
$('.flee').on('click', () => {
  location.reload();
})

});
