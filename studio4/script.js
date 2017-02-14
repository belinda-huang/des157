// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var countDownDate = new Date("Dec 31, 3000 23:59:59").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("timeLeft").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeLeft").innerHTML = "WOW I CAN'T BELIEVE THIS SITE STILL WORKS BUT NOW YOU'VE BEEN TO THE YEAR 3000";
      }
    }, 1000);

    /*
    var numberOfDays = document.getElementById('numberOfDays');
    var today = new Date(); // today's date
    var threethou = new Date(3000,0,1); // months are 0-11

    // find out the absolute difference between the
    // two date objects with the getTime() method
    var timeDiff = Math.abs(today.getTime() - threethou.getTime());

    // convert from milliseconds to days by
    // dividing by milliseconds * minutes * hours
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var diffHours = Math.ceil(timeDiff / (1000 * 3600));
    var diffMin = Math.ceil(timeDiff / (1000 * 60));
    var diffSec = Math.ceil(timeDiff/ (1000));
    numberOfDays.innerHTML = diffDays;
    numberOfHours.innerHTML = diffHours;
    numberOfMin.innerHTML = diffMin;
    numberOfSec.innerHTML = diffSec;
    */



    // update the calculation to find out how many days until your next birthday
    // all other js here

});
