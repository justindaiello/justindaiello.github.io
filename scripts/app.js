console.log('script is connected')

$(() => {

  $.ajax({
      url: "https://api-beta.open5e.com/classes/"
  }).then(
      (data)=>{
        $('.photo').attr('src', "css/images/cleric.png")
        $('.class-info h1').text(`${data.results[2].name}:`.toUpperCase());
        $('.class-info p').text(data.results[2].desc)
      },
      ()=>{
          console.log('bad');
      }
  );

$('.navbar').hide().fadeIn(2000);




});
