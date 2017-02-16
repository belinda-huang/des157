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
        //
        noteId = document.getElementById(this.id);
        noteTimer = setTimeout(showMsg, 1000);
      });

      elements[i].addEventListener ('mouseout', function(){
        clearTimeout(noteTimer);
        noteId.style.opacity = 0;
      });
      }

      function showMsg(){
        //use "this" to find out which object called the function
        noteId.style.opacity = 1;
      }


    }, 1000);




});
