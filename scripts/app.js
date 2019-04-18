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
        $('.class-info, .photo-box, .misc-info').css('display', 'flex');
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


const generateCharacter = () => {
//ajax request for random class. Generates a random number and plugs it into the index request
  $.ajax({
      url: "https://api-beta.open5e.com/classes/"
  }).then(
      (data)=>{
        let randomIndex = Math.floor(Math.random() * (12 - 0) + 0);
        $('.modal-inside h1').text(`${data.results[randomIndex].name}:`.toUpperCase()).hide().fadeIn(1000);
      },
      ()=>{ console.log('bad')}
    );
//ajax request for random race. generates a random number and plugs it into the index request
    $.ajax({
        url: "https://api-beta.open5e.com/races/"
    }).then(
        (data)=>{
          let randomIndex = Math.floor(Math.random() * (9 - 0) + 0);
          $('.race').text(` ${data.results[randomIndex].name}`).hide().fadeIn(1000);
        },
        ()=>{ console.log('bad')}
      );
//ajax request for random magical item. generates a random number and plugs it into the index request
    $.ajax({
        url: "https://api-beta.open5e.com/magicitems/"
    }).then(
        (data)=>{
          let randomIndex = Math.floor(Math.random() * (30 - 0) + 0);
          $('.item').text(` ${data.results[randomIndex].name}`).hide().fadeIn(1000);
          $('.desc').text(` ${data.results[randomIndex].desc}`).hide().fadeIn(1000);
        },
        ()=>{ console.log('bad')}
      );
//ajax request to generate monster killed. generates a random number and plugs it into the index request
      $.ajax({
          url: "https://api-beta.open5e.com/monsters/"
      }).then(
          (data)=>{
            let randomIndex = Math.floor(Math.random() * (30 - 0) + 0);
            $('.monsters').text(` ${data.results[randomIndex].name}`).hide().fadeIn(1000);
          },
          ()=>{ console.log('bad')}
        );
//ajax request to generate a random condition. generates a random condtion and plugs it into the index request.
        $.ajax({
            url: "https://api-beta.open5e.com/conditions/"
        }).then(
            (data)=>{
              let randomIndex = Math.floor(Math.random() * (15 - 0) + 0);
              $('.condition').text(` ${data.results[randomIndex].name}`).hide().fadeIn(1000);
            },
            ()=>{ console.log('bad')}
          );


}


$(() => {
//Fades in the NavBar upon page load
$('.navbar').hide().fadeIn(1000);

//Listener to pull Barbarian API data and add it to the DOM
$('#barbarian').on('click', () => { $getCharInfo(0, "images/barbarian.png") })

//Listener to pull Bard API data and add it to the DOM
$('#bard').on('click', () => { $getCharInfo(1, "images/bard.png") })

//Listener to pull Cleric API data and add it to the DOM
$('#cleric').on('click', () => { $getCharInfo(2, "images/cleric.png") })

//Listener to pull Druid API data and add it to the DOM
$('#druid').on('click', () => { $getCharInfo(3, "images/druid.png") })

//Listener to pull Fighter API data and add it to the DOM
$('#fighter').on('click', () => { $getCharInfo(4, "images/fighter.png") })

//Listener to pull Monk API data and add it to the DOM
$('#monk').on('click', () => { $getCharInfo(5, "images/monk.png") })

//Listener to pull Paladin API data and add it to the DOM
$('#paladin').on('click', () => { $getCharInfo(6, "images/paladin.png") })

//Listener to pull Ranger API data and add it to the DOM
$('#ranger').on('click', () => { $getCharInfo(7, "images/ranger.png") })

//Listener to pull Rogue API data and add it to the DOM
$('#rogue').on('click', () => { $getCharInfo(8, "images/rogue.png") })

//Listener to pull Sorcerer API data and add it to the DOM
$('#sorceror').on('click', () => { $getCharInfo(9, "images/sorcerer.png") })

//Listener to pull Warlock API data and add it to the DOM
$('#warlock').on('click', () => { $getCharInfo(10, "images/warlock.png") })

//Listener to pull Wizard API data and add it to the DOM
$('#wizard').on('click', () => { $getCharInfo(11, "images/wizard.png") })


//Listener to open the modal when the generate button is clicked
$('.modal-btn').on('click', () => {
  $('#modal-box').css('display', 'block');
  $('.container').css('filter', 'blur(3px)');
  generateCharacter();
  })

//Listener to close the modal when the X is clicked
$('.close').on('click', () => {
  $('#modal-box').css('display', 'none')
  $('.container').css('filter', 'none');
})



});
