let buttonElement =document.querySelector('button');

buttonElement.addEventListener('click', function go(){
  let sunsign = document.querySelector('input').value;


  fetch(`http://sandipbgt.com/theastrologer/api/horoscope/${sunsign}/today`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log(response)
        let horoResp = response.horoscope;
        console.log(horoResp)
        console.log(sunsign)
        document.querySelector('h3').innerHTML = horoResp;
        document.querySelector('h2').innerHTML = sunsign;


      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

})
