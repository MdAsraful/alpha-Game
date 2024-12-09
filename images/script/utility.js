function hideElementById(elementId){
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add('hidden')
}

function showElement(elementId){
    const playGroundSection = document.getElementById(elementId);
    playGroundSection.classList.remove('hidden')
}

function  getARandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets= alphabetString.split('');
    const randomeNumber = Math.random() * 25;
    const index = Math.round(randomeNumber)

    const alphabet = alphabets[index];
    console.log(index, alphabet)
    return alphabet
}