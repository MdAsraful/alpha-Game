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