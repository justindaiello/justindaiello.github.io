console.log('script is connected')

$(() => {

  $.ajax({
      url: "https://api-beta.open5e.com/classes/"
  }).then(
      (data)=>{
        console.log(data.results[2].equipment);
      },
      ()=>{
          console.log('bad');
      }
  );






});
