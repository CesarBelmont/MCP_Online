
function hideAll() { //Hide all elements (Buttons and the NoGoIndicator)
    document.getElementById("readInstruction").style.display = "none";
    document.getElementById("readConsent").style.display = "none";
    document.getElementById("startDemographics").style.display = "none";
    document.getElementById("startPractice").style.display = "none";
    document.getElementById("startPhase1").style.display = "none";
    document.getElementById("startPhase2").style.display = "none";
    document.getElementById("startSurvey").style.display = "none";
    document.getElementById("ClosePage").style.display = "none";
    document.getElementById("NoGoIndicator").style.display = "none";
    document.getElementById("mturk_form").style.display = "none";
    document.getElementById("initialize").style.display = "none";
}

function updateMenu(expStage) { //Depending on the stage it will display a diferent button
    
    var numStage = parseInt(expStage, 10);
    switch (numStage) {     
        case 0:
            hideAll();
            document.getElementById("initialize").textContent = "Please read the informed consent carefully before agreeing to participate in this study.";
            document.getElementById("initialize").style.display = "inline";
            document.getElementById("readConsent").style.display = "inline";
            break;
        case 1:
            hideAll();
            if (sessionStorage.getItem("Consent") === "true") {
                document.getElementById("initialize").textContent = "To continue, please fill out a demographic survey.";
                document.getElementById("initialize").style.display = "inline";
                document.getElementById("startDemographics").style.display = "inline";
            } else {
                document.getElementById("NoGoIndicator").style.display = "inline";
            }
            break;
        case 2:
            hideAll();
            document.getElementById("initialize").textContent = "Let's start with some sample practice trials!";
            document.getElementById("initialize").style.display = "inline";
            document.getElementById("startPractice").style.display = "inline";
            break;
        case 3:
            hideAll();
            document.getElementById("initialize").textContent = "Ready to start the experiment?";
            document.getElementById("initialize").style.display = "inline";
            document.getElementById("startPhase1").style.display = "inline";
            break;
        case 4:
            hideAll();
            document.getElementById("initialize").textContent = "Phase II: Ready?";
            document.getElementById("initialize").style.display = "inline";
            document.getElementById("startPhase2").style.display = "inline";
            break;
        case 5:
            hideAll();
            document.getElementById("initialize").textContent = "Thank you for your participation. Press the button to submit your score";                  
            document.getElementById("submitButton").style.display = "inline";
            document.getElementById("mturk_form").style.display = "inline";
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