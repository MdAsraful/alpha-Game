

function handleKeybordButtonPress(event){
    const playerPressed = event.key;

    // Get the expected to press

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // Check match or Not

    if(playerPressed === expectedAlphabet){
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