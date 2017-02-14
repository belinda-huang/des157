// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

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



    // update the calculation to find out how many days until your next birthday
    // all other js here

});
