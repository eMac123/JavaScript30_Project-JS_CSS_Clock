
// Variabes from the DOM
const hourArm = document.querySelector('.hour-arm');
const minArm = document.querySelector('.min-arm');
const secArm = document.querySelector('.sec-arm');


function clock() {

   // get Date
   const date = new Date();
   // get hours
   const hour = date.getHours();
   // get minutes
   const minutes = date.getMinutes();
   // get seconds
   const seconds = date.getSeconds();
   
   // set transform for the seconds arm
   secArm.style.transform = `rotate(${(seconds / 60 * 360 ) + 90}deg)`;

   // set transform for the minutes arm
   minArm.style.transform = `rotate(${minutes / 60 * 360 + 90}deg)`;

   // set transform for the hour arm
   hourArm.style.transform = `rotate(${hour / 12 * 360 + 90}deg)`;


}

// set interval. Every second invoke clock() function
setInterval(clock, 1000);