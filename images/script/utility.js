function hideElementById(elementId){
    const homeScreen = document.getElementById(elementId);
    homeScreen.classList.add('hidden')
}

function showElement(elementId){
    const playGroundSection = document.getElementById(elementId);
    playGroundSection.classList.remove('hidden')
}