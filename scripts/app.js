console.log('script is connected')

$(() => {

  $.ajax({
      url: "https://api-beta.open5e.com/classes/"
  }).then(
      (data)=>{
        $('.photo').attr('src', "css/images/cleric.png")
        $('.class-info h1').text(`${data.results[2].name}:`.toUpperCase());
        $('.class-info p').text(data.results[2].desc);
        $('.dice').text(' ' + data.results[2].hit_dice);
        $('.spells').text(' ' + data.results[2].spellcasting_ability);
        $('.prof').text(' ' + data.results[2].prof_saving_throws);
        $('.armor').text(' ' + data.results[2].prof_armor);
        $('.skills').text(' ' + data.results[2].prof_skills);
        $('.box-2 span').text(' ' + data.results[2].archetypes[0].name);
        $('.box-2 p').text(' ' + data.results[2].archetypes[0].desc);
      },
      ()=>{
          console.log('bad');
      }
  );

$('.navbar').hide().fadeIn(2000);




});
