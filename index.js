function alertme(){
  alert("HEY, I have been clicked");
}



// var btns = document.querySelectorAll(".drum");
// for(var i=0; i < btns.length; i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click", alertme);
// }


document.querySelector(".w").addEventListener("click", playTom1);
document.addEventListener('keypress', logKey);
document.querySelector(".a").addEventListener("click", playTom2);
document.querySelector(".s").addEventListener("click", playTom3);
document.querySelector(".d").addEventListener("click", playTom4);
document.querySelector(".j").addEventListener("click", playKickBass);
document.querySelector(".k").addEventListener("click", playCrash);
document.querySelector(".l").addEventListener("click", playSnare);
function playTom1(){
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
  addAnimation("w");

}

function playTom2(){
  var tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  addAnimation("a");
}

function playTom3(){
  var tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  addAnimation("s");
}

function playTom4(){
  var tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  addAnimation("d");
}

function playKickBass(){
  var kickBass = new Audio("sounds/kick-bass.mp3");
  kickBass.play();
  addAnimation("j");
}

function playCrash(){
  var crash = new Audio("sounds/crash.mp3");
  crash.play();
  addAnimation("k");
}

function playSnare(){
  var snare = new Audio("sounds/snare.mp3");
  snare.play();
  addAnimation("l");
}

function logKey(e){
  if((e.key).toLowerCase() === "w"){
    playTom1();
  }

    else if ((e.key).toLowerCase() === "a") {
      playTom2();
  }
  else if ((e.key).toLowerCase() === "s") {
    playTom3();
  }
  else if ((e.key).toLowerCase() === "d") {
    playTom4();
  }
  else if ((e.key).toLowerCase() === "j") {
    playKickBass();
  }
  else if ((e.key).toLowerCase() === "k") {
    playCrash();
  }
  else if ((e.key).toLowerCase() === "l") {
    playSnare();
  }
}


function addAnimation(currentClass){
  var animated = document.querySelector("." + currentClass);
    animated.classList.add("pressed");

    setTimeout( function(){
      animated.classList.remove("pressed");}, 100);
  }


  // 
  // $(document).keypress(function(event){
  //   $("h1").text(event.key);
  //
  //
  // });
