// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //capture the submit event
      document.f.onsubmit = processForm;



      //define process function
      function processForm() {}
        //store user name in a variable
        var userName = document.f.userName.value;
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

        if (username || food || number || color || sport || adverb || verb || adjective || place || family || saying == "") {
          alert('Hi please fill out all items. Pls.');
        }
        
        var userMsg = document.getElementById("userMsg");

        var smartMsg = doocument.getElementById("smartMsg");

        userMsg.innerHTML= userName+"baby"+number + ": " + "today I ate some " + food;

        smartMsg.innerHTML="SmarterChild:  " + "That doesn't sound good for you. If you want to look great wearing " + color + ", then maybe you should stop " + verb + "ing and pick up " + sport ". There is a good spot in " + place + ". You are " + adjective + " enough to do it. You know what your " + family + " always says: " + saying + "! ";


          //store user name in a variable
          var userName = document.f.userName.value;
          alert('Hi ' + userName);

          //store userColor in a variable called userColor

          //comment out the alert message above

          //call a new alert() to concatenate a message with userName and userColor

           //prevent page from reloading
          return false;

        }

        var result=min(num1, num2);
        if (result == false) {
          document.getElementById("myMsg").innerHTML = "Your inputs have the same value! Why do you do this?";
        }
        else {
          document.getElementById("myMsg").innerHTML = result + " is smaller between the two.";
        }
        return false;
      }
        //store userColor in a variable called userColor

        //comment out the alert message above

        //call a new alert() to concatenate a message with userName and userColor

         //prevent page from reloading
        return false;

      }

});
console.log('reading');
