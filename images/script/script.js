

function handleKeybordButtonPress(event){
    const playerPressed = event.key;

    // Get the expected to press

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // Check match or Not

    if(playerPressed === expectedAlphabet){
        console.log('user pressed the right word')
        // update Score
        const currenScoreElement=document.getElementById('current-score');
        const currentScoreText= currenScoreElement.innerText;
        const currentScore=parseInt(currentScoreText);

        // New Score
        const newScore= currentScore+1;
        
        // Show Updated score
        currenScoreElement.innerText=newScore; 



        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{

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
    hideElementById('startGame')
    showElement('playGround')
    continueGame()
}