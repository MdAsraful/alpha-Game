function hideElementById(elementId){
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add('hidden')
}

function showElement(elementId){
    const playGroundSection = document.getElementById(elementId);
    playGroundSection.classList.remove('hidden')
}

function setBackgroundColourById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
     
}

function getTextElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueText=element.innerText;
    const value=parseInt(elementValueText);
    return value;
}

function setElementValueById(elementId, value){
    const element=document.getElementById(elementId);
    element.innerText=value;

}




function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function  getARandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabets= alphabetString.split('');
    const randomeNumber = Math.random() * 25;
    const index = Math.round(randomeNumber)

    const alphabet = alphabets[index];
    // console.log(index, alphabet)
    return alphabet
}