console.log('script is connected')


//==================================================
//Function to grab API data and append it to the DOM
//Arguments take the index number of the class and the location of the classes photo
//API into is pulled and appened to various places in the DOM
//===================================================
const $getCharInfo = (index, pic) => {
  $.ajax({
      url: "https://api-beta.open5e.com/classes/"
  }).then(
      (data)=>{
        $('.photo').attr('src', pic).hide().fadeIn(1000)
        $('.class-info h1').text(`${data.results[index].name}:`.toUpperCase()).hide().fadeIn(2000);
        $('.class-info p').text(data.results[index].desc).hide().fadeIn(2000);
        $('.dice').text(' ' + data.results[index].hit_dice).hide().fadeIn(2500);
        $('.spells').text(' ' + data.results[index].spellcasting_ability).hide().fadeIn(2500);
        $('.prof').text(' ' + data.results[index].prof_saving_throws).hide().fadeIn(2500);
        $('.armor').text(' ' + data.results[index].prof_armor).hide().fadeIn(2500);
        $('.skills').text(' ' + data.results[index].prof_skills).hide().fadeIn(2500);
        $('.box-2 span').text(' ' + data.results[index].archetypes[0].name).hide().fadeIn(2500);
        $('.box-2 p').text(' ' + data.results[index].archetypes[0].desc).hide().fadeIn(2500);
      },
      ()=>{
          console.log('bad');
      }
  );
}

$(() => {
//Fades in the NavBar upon page load
$('.navbar').hide().fadeIn(2000);

//Listener to pull Barbarian API data and add it to the DOM
$('#barbarian').on('click', () => { $getCharInfo(0, "css/images/barbarian.png") })

//Listener to pull Cleric API data and add it to the DOM
$('#cleric').on('click', () => { $getCharInfo(2, "css/images/cleric.png") })

//Listener to pull Druid API data and add it to the DOM
$('#druid').on('click', () => { $getCharInfo(3, "css/images/druid.png") })

//Listener to pull Monk API data and add it to the DOM
$('#monk').on('click', () => { $getCharInfo(5, "css/images/monk.png") })

//Listener to pull Warlock API data and add it to the DOM
$('#warlock').on('click', () => { $getCharInfo(10, "css/images/warlock.png") })


});
