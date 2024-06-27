// alert("Working!");
 

var gamePattern = [];
var userClickedPattern=[];
 var started=false;
 var level=0;
var buttonColours = ["red", "blue", "green", "yellow"];
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});
 
  


  function playSound(userChosenColour){
    var audio = new Audio("sounds/" + userChosenColour + ".mp3");
    audio.play();
  }

  function animatePress(userChosenColour){
    $("." + userChosenColour).addClass("pressed");
    setTimeout(function() {
        $("." + userChosenColour).removeClass("pressed");
    }, 100);
  }
  
 
 
function nextSequence() {
 

    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    
    // $("#"+randomChosenColour).animate({opacity: 0.1}, 100, 'linear').animate({opacity: 1}, 100, 'linear');
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // switch(randomChosenColour){
    //     case "red":
    //           var audio=new Audio("sounds/red.mp3");
    //           audio.play();
    //     break;
    //     case "blue":
    //           var audio=new Audio("sounds/blue.mp3");
    //           audio.play();
    //     break;
    //     case "green":
    //           var audio=new Audio("sounds/green.mp3");
    //           audio.play();
    //     break;
    //     case "yellow":
    //           var audio=new Audio("sounds/yellow.mp3");
    //           audio.play();
    //     break;
        
        
    //     default:(console.log(randomChosenColour));
        
    // }

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
   
    
  level=level+1;

    
    
    
}
 

$(".btn").click(function() {

  //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");

  //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
  userClickedPattern.push(userChosenColour);

  // console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  
  checkAnswer(userClickedPattern.length-1);
  

  

});

var currentLevel;
function checkAnswer(currentLevel){
  if( userClickedPattern[currentLevel]=== gamePattern[currentLevel]){
    console.log("Right");
    if( userClickedPattern.length=== gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    
    }
  
  }
   
   else{
    $("h1").text("Game Over, Press Any Key to Restart");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    startOver();

   }
  
 
  
}
 
function startOver() {

 
  level = 0;
  gamePattern = [];
  started = false;
}


 
 

 
 

 

 