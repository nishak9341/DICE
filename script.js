function rollDice() {
    var dice1 
= document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");
    var winnerElement = document.getElementById("total");
    var audio = new Audio("dice music.mp3"); // Replace "dice-roll.mp3" with the path to your audio file

  
    // Generate random numbers between 1 and 6 for each dice
    var diceValue1 = Math.floor(Math.random() * 6) + 1;
    var diceValue2 = Math.floor(Math.random() * 6) + 1;
  
    // Update the dice images with rotation animation
    dice1.style.animation = "rotate 1s linear";
    dice2.style.animation = "rotate 1s linear";
    audio.play();
  
    // Wait for the animation to finish (1 second) before updating the images
    setTimeout(function() {
      // Reset the animation to none after it finishes
      dice1.style.animation = "none";
      dice2.style.animation = "none";

      audio.play();
    
      // Update the dice images
      dice1.src = "dice" + diceValue1 + ".png";
      dice2.src = "dice" + diceValue2 + ".png";
    
      // Determine the winner based on the dice values
      winnerElement.textContent = "Winner: " + winnerName;
    }, 1000);
  
      var winnerName = "";
      if (diceValue1 > diceValue2) {
        winnerName = "player1 is winner";
      } else if (diceValue1 < diceValue2) {
        winnerName = "player2 is winner";
      } else {
        winnerName = "sorry,It's a tie ";
      }
    }      
