

function handleKeybordButtonPress(event){
    const playerPressed = event.key;

    // Get the expected to press

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // Check match or Not

    if(playerPressed === expectedAlphabet){

        const currentScore= getTextElementValueById("current-score")

        const updatedScore=currentScore + 1;

        setElementValueById('current-score', updatedScore)

        // console.log('user pressed the right word')
        // // update Score
        // const currenScoreElement=document.getElementById('current-score');
        // const currentScoreText= currenScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText);

        // // New Score
        // const newScore= currentScore+1;
        
        // // Show Updated score
        // currenScoreElement.innerText=newScore; 



        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        const currentLife= getTextElementValueById("current-Life")

        const updatedLife=currentLife - 1;

        setElementValueById('current-Life', updatedLife)
        if(updatedLife===0){
            gameOver()
        }



        // current life number
        // const currentLifeElement=document.getElementById('current-Life-Count');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=currentLifeText-1;

        // currentLifeElement.innerText=currentLife 

    }

}
document.addEventListener('keyup', handleKeybordButtonPress)

function continueGame(){
    const alphabet = getARandomAlphabet();
  // Randomly genareted the Alphabet 
  const currentAlphabetEliment=document.getElementById('currentAlphabet');
  currentAlphabetEliment.innerText=alphabet;

//  set background-Color of text
    setBackgroundColourById(alphabet)

}


function Play(){
    // Hide Everything
    hideElementById('startGame');
    hideElementById('game-over');
    showElement('playGround');
    // Set Value
    setElementValueById('current-Life', 5);
    setElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('playGround');
    showElement('game-over');
    

}