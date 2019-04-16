//Character object. Holds a random generated name and hit points
const character = {
  name: name,
  hitPoints: 30,
  fight: () => {

  }
}

const troll = {
  name: 'an angry Troll',
  hitPoints: 20,
  fight: () => {
    let hitPower = Math.floor(Math.random() * 4) + 3;
    $('.game-board').append($('<div>').addClass('troll-text').text(`${troll.name} ambushes you and hits you for ${hitPower} damage!`).hide().fadeIn(1000))
  }
}


//Name Arrays for the randomizer to choose from. Names are taken from the D&D 5th edition manual
const nameArr1 = ['Adrik', 'Eberk', 'Fargrim', 'Gunnloda', 'Adran', 'Himo', 'Rolen', 'Varis', 'Bree', 'Nedda', 'Verna', 'Portia', 'Perrin', 'Eldon', 'Khalid', 'Ramas', 'Surina', 'Mehen', 'Donaar', 'Heskan'];

const nameArr2 = ['Goodbarrel', 'Greenbottle', 'High-hill', 'Tealeaf', 'Brushgather', 'Gemflower', 'Moonbrook', 'Diamonddew', 'Moonwhisper', 'Starflower', 'Battlehammer', 'Frostbeard', 'Ironfist', 'Fireforge', 'Thokk', 'Dispair', 'Sorrow', 'Stumbleduck', 'Badger', 'Sparklegem']

//Function to randomize a name from the 2 name arrays. Generates a random number based on the length of the array and concatenates the strings associated with the random index numbers
const randomizer = () => {
  let firstName = nameArr1[Math.floor(Math.random() * nameArr1.length)];
  let lastName = nameArr2[Math.floor(Math.random() * nameArr2.length)];
  $('.name').text(`${firstName} ${lastName}`).hide().fadeIn(1000);
  character.name = `${firstName} ${lastName}`
  gameScript();
}

//Initial script to run the game. Welcomes the player then uses some delays to introduce the enemy, stage an attack by the enemy, then give the player options on what to do next.
const gameScript = () => {
  $('.game-text').text(`Welcome ${character.name}`).hide().fadeIn(1000).delay(5000);
  //sets delay between first and second line of text
  setTimeout(() => {
    $('.game-board').append($('<div>').addClass('game-text').text('A formidable foe approaches in the distance...').hide().fadeIn(1000))
  }, 2000);
  //Gives the troll the first attack on the player after a quick delay
  setTimeout(() => {
    troll.fight();
  }, 4000);

}


$ (() => {

//Listener to generate a random name when Generate button is pressed.
$('.name-btn').on('click', randomizer);






});
