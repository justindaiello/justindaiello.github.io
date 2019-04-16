console.log('script is connected');


//Character object. Holds a random generated name and hit points
const character = {
  name: name,
  hitPoints: 30
}


//Name Arrays for the randomizer to choose from. Names are taken from the D&D 5th edition manual
const nameArr1 = ['Adrik', 'Eberk', 'Fargrim', 'Gunnloda', 'Adran', 'Himo', 'Rolen', 'Varis', 'Bree', 'Nedda', 'Verna', 'Portia', 'Perrin', 'Eldon', 'Khalid', 'Ramas', 'Surina', 'Mehen', 'Donaar', 'Heskan'];

const nameArr2 = ['Goodbarrel', 'Greenbottle', 'High-hill', 'Tealeaf', 'Brushgather', 'Gemflower', 'Moonbrook', 'Diamonddew', 'Moonwhisper', 'Starflower', 'Battlehammer', 'Frostbeard', 'Ironfist', 'Fireforge', 'Thokk', 'Dispair', 'Sorrow', 'Stumbleduck', 'Badger', 'Sparklegem']

//Function to randomize a name from the 2 name arrows. Generates a random number based on the length of the array and concatenates the strings associated with the random index numbers
const randomizer = () => {
  let firstName = nameArr1[Math.floor(Math.random() * nameArr1.length)];
  let lastName = nameArr2[Math.floor(Math.random() * nameArr2.length)];
  $('.name').text(`${firstName} ${lastName}`);
  character.name = `${firstName} ${lastName}`
  console.log(character.name);
}


$ (() => {

$('.name-btn').on('click', randomizer);






});
