function display_greetings(){
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    
    if(hourNow > 15){
        greeting = 'Good Evening';
    }
    else if(hourNow > 12){
        greeting = 'Good Afternoon';
    }
    else if(hourNow > 0){
        greeting = 'Good Morning';
    }
    else{
        greeting = 'Welcome';
    }

    
    return greeting;
    
}
var i = 0;
var txt = display_greetings();
var speed = 250;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greetings").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}