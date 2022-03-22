let days = document.getElementById("days")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")

days.innerText = "08"
hours.innerText = "23"
minutes.innerText = "55"
seconds.innerText = "41"

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function clock(){ 
  while(true){
    await sleep(1000)
    seconds.innerText -= 1;
    
    if(seconds.innerText == 0){
      seconds.innerText = 60;
      minutes.innerText -= 1;

      if(minutes.innerText == 0){
        minutes.innerText = 60;
        hours.innerText -= 1;
      }if(hours.innerText == 0){
        hours.innerText = 24;
        days.innerText -= 1;
      }if(days.innerText == 0){
        days.innerText = "00"
        hours.innerText = "00"
        minutes.innerText = "00"
        seconds.innerText = "00"
        break
      }
    }
  } 
}

clock()