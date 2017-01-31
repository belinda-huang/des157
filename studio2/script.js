// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //capture the submit event
      document.f.onsubmit = processForm;

      //define process function
      function processForm(e) {
        e.preventDefault();

        //store user name in a variable
        var name = document.f.name.value;
        var food = document.f.food.value;
        var number = document.f.number.value;
        var color = document.f.color.value;
        var sport = document.f.sport.value;
        var adverb = document.f.adverb.value;
        var verb = document.f.verb.value;
        var adjective = document.f.adjective.value;
        var place = document.f.place.value;
        var family = document.f.family.value;
        var saying = document.f.saying.value;

        /*if (username || food || number || color || sport || adverb || verb || adjective || place || family || saying == "") {
          alert('Hi please fill out all items. Pls.');
        }*/
        document.getElementById("userName").innerHTML = "SmarterChild: ";
        document.getElementById("userName").innerHTML = name+"baby"+number + ": ";
        document.getElementById("userMsg").innerHTML = "today I ate some " + food;

        document.getElementById("smartMsg").innerHTML = "That doesn't sound good for you. If you want to look great wearing " + color + ", then maybe you should stop " + verb + "ing and pick up " + sport + ". There is a good spot in " + place + ". You are " + adjective + " enough to do it. You know what your " + family + " always says: " + saying + "! ";

      }

});
