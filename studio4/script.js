// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var countDownDate = new Date("Dec 31, 3000 23:59:59").getTime();

    //countdown every second
    var x = setInterval(function() {

      //today date time
      var now = new Date().getTime();

      //calculate distance between date and now
      var distance = countDownDate - now;

      //when note is selected
      var elements = document.getElementsByTagName('p');
      //variable for timed note
      var noteTimer, noteId;

      //time calculations
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      //display countdown
      document.getElementById("timeLeft").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      //IF IT GETS TO YEAR 3000
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeLeft").innerHTML = "WOW I CAN'T BELIEVE THIS SITE STILL WORKS BUT NOW YOU'VE BEEN TO THE YEAR 3000";
      }

      //time element for note
      for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener ('mouseover', function(event){
        // what if I wanted to send a parameter ('eat') with the call to showMsg?
        noteId = document.getElementById(this.id);
        noteTimer = setTimeout(showMsg, 1000);
      });

      elements[i].addEventListener ('mouseout', function(){
        clearTimeout(noteTimer);
        noteId.style.opacity = 0;
      });
      }

      function showMsg(){
        //can I use "this" to find out which object called the function?
        noteId.style.opacity = 1;
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
