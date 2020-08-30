
function hideAll() { //Hide all elements (Buttons and the NoGoIndicator)
    document.getElementById("readInstruction").style.display = "none";
    document.getElementById("userData").style.display = "none";
    document.getElementById("startPractice").style.display = "none";
    document.getElementById("startPhase1").style.display = "none";
    document.getElementById("startPhase2").style.display = "none";
    document.getElementById("ClosePage").style.display = "none";
    document.getElementById("initialize").style.display = "none";

}

function updateMenu(expStage) { //Depending on the stage it will display a diferent button
    
    var numStage = parseInt(expStage, 10);
    switch (numStage) {     
        case 0:
            hideAll();
            document.getElementById("initialize").textContent = "We need some data first, plase fill the info required";
            document.getElementById("initialize").style.display = "inline";
            document.getElementById("userData").style.display = "inline";
            break;
        case 1:
            hideAll();
            document.getElementById("initialize").textContent = "Let's start with some sample practice trials!";
            document.getElementById("initialize").style.display = "inline";
            document.getElementById("startPractice").style.display = "inline";
            break;
        case 2:
            hideAll();
            document.getElementById("initialize").textContent = "Ready to start the experiment?";
            document.getElementById("initialize").style.display = "inline";
            document.getElementById("startPhase1").style.display = "inline";
            break;
        case 3:
            hideAll();
            document.getElementById("initialize").textContent = "Phase II: Ready?";
            document.getElementById("initialize").style.display = "inline";
            document.getElementById("startPhase2").style.display = "inline";
            break;
        case 4:
            hideAll();
            document.getElementById("initialize").textContent = "Thank you for your participation. Press the button to submit your score";
            document.getElementById("initialize").style.display = "inline";
            break;
        default:
            hideAll();
            document.getElementById("initialize").style.display = "inline";
            document.getElementById("readInstruction").style.display = "inline";
            break;
    }
}

document.addEventListener('DOMContentLoaded', function () {   
    hideAll();
    updateMenu(sessionStorage.getItem("Stage"));
});