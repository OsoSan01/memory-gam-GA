// constants

const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");


// cached elements
let maxTime = 40;
let timeLeft = maxTime;
let flips = 0; 
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;


// functions
function initTimer() {
    if(timeLeft <= 0) {
    clearInterval(timer);
    timeLeft=0;
    showLostMessage();
    }
    timeTag.innerText = timeLeft;
    timeLeft--;
}

function flipCard({target: clickedCard}) {
    if(!isPlaying) { //bang statement to check if the game has started already or not.
        isPlaying = true; //if there is a click and the game hasn't started yet, starts the timer
        timer = setInterval(initTimer, 1000);
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if(!cardOne) { //creates the condition to check if the clicked card is the first one to be click, therefore, can be compared with cardtwo
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
      matchedCard++;
      //keeps incrementing the count of matched cards until the next condition,
      // either 6 images matched or time ran out
      if (matchedCard === 6 && timeLeft > 0) {
        clearInterval(timer);
        gameOver = true;
        showWinMessage();
      }
//guard preventing further clicks if any of the last conditions were met.
      cardOne.removeEventListener("click", flipCard);
      cardTwo.removeEventListener("click", flipCard);
      cardOne = cardTwo = "";
      return disableDeck = false;
    }
  //function for the shake animation
    setTimeout(() => {
      cardOne.classList.add("shake");
      cardTwo.classList.add("shake");
    }, 500);
  
    setTimeout(() => {
        //if the card was not a match, removes the shake and flip class 
        //in order to be able to keep playing
      cardOne.classList.remove("shake", "flip");
      cardTwo.classList.remove("shake", "flip");
      cardOne = cardTwo = "";
      disableDeck = false;
      
      if (matchedCard !== 6 && timeLeft < 0) {
        showLostMessage();
      }
    }, 1200);
    // time to wait until the "shake" function happens 
    //after flipping to wrong cards
  }


function shuffleCard() { //preparing for a new game
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = ""; //no cards selected
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;
    

    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    //this is the "array" of the 12 elements on the grid and it's repeated twice
    // in order to be able to shuffle each image into two different places
    arr.sort(() => Math.random() > 0.5 ? 1 : -1); //this sorts the above array randomly

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        setTimeout(() => {
            imgTag.src = `images/img-${arr[index]}.png`;
        });
        card.addEventListener("click", flipCard);

    });
// "removes" the flip class and let each image to be passed randomly into each "card"
}


// event listeners

refreshBtn.addEventListener("click", function(){
    shuffleCard();
    hideWinMessage()
});

// everytime the refresh button is clicked, shuffleCards is called and enters in action

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});
// everytime there is a click on a "card" it will "flip" showing the back image,
// the one that the player should allocate it's twin.

function showWinMessage() {
    let winMessage = document.querySelector(".winning");
    winMessage.textContent = "You WIN!!!";
    winMessage.style.display = "block";
  }
// shows the message "you win" when the if statament of 6 cards matched is done
//and game is over, there is an div element on the html for this matter



  function hideWinMessage() {
    let winMessage = document.querySelector(".winning");
    winMessage.style.display = "none";
  }
//hides the winning message after clicking the refresh button

  function showLostMessage() {
    let winMessage = document.querySelector(".winning");
    winMessage.textContent = "You LOST! Try again?";
    winMessage.style.display = "block";
  }

  function hideLostMessage() {
    let winMessage = document.querySelector(".winning");
    winMessage.style.display = "none";
  }