// checks for used items
let isHazmatWorn = false;
let isNotebookOpen = false;
let isPoisonOpen = false;
let isRicin = false;
let chemicalsClicked = [];

// connecting elements from the HTML to JS variables
const headline = document.getElementById("headline");
const hazmatSuit = document.getElementById("hazmat");
const notebook = document.getElementById("notebook");
const isoAlc = document.getElementById("isopropyl-alc");
const chemOne = document.getElementById("chem-one");
const chemTwo = document.getElementById("chem-two");
const chemThree = document.getElementById("chem-three");
const chemFour = document.getElementById("chem-four");
const poison = document.getElementById("poison");
const ricin = document.getElementById("ricin");
// endgame notifications
const poisonEndGame = document.getElementById("poison-death");
const successfulEndgame = document.getElementById("success");
const noSuit = document.getElementById("no-suit");
const killGus = document.getElementById("kill-gus");

// chemical class
class Chemicals {
    constructor(name, isClicked) {
    this.name = name;
    this.isClicked = false;
}}

// individual chemicals
let chem1 = new Chemicals("chemical one");
let chem2 = new Chemicals("chemical two");
let chem3 = new Chemicals("chemical three");
let chem4 = new Chemicals("chemical four");


// connecting my DOM elements to click functions
headline.addEventListener("click", function () {
    alert(`head`);
});
hazmatSuit.addEventListener("click", function () {
    isHazmatWorn = true;
    // alert(`you're wearing the hazmat suit`);

    modal.style.display = "block";
    console.log("hazmat click");


});
notebook.addEventListener("click", function () {
    isNotebookOpen = true;
    alert(`you found the notebook`);
    modal.style.display = "block";
    console.log("hazmat click");
});
isoAlc.addEventListener("click", function () {
    isClicked = true;
    alert("isopropyl alcohol");
    modal.style.display = "block";
    console.log("hazmat click");
});
chemOne.addEventListener("click", function () {
    chem1.isClicked = true;
    chemicalsClicked.push(chem1);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
    modal.style.display = "block";
    console.log("hazmat click");
});
chemTwo.addEventListener("click", function () {
    chem2.isClicked = true;
    chemicalsClicked.push(chem2);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
    modal.style.display = "block";
    console.log("hazmat click");
});
chemThree.addEventListener("click", function () {
    chem3.isClicked = true;
    chemicalsClicked.push(chem3);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
    modal.style.display = "block";
    console.log("hazmat click");
});
chemFour.addEventListener("click", function () {
    chem4.isClicked = true;
    chemicalsClicked.push(chem4);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
    modal.style.display = "block";
    console.log("hazmat click");
});
poison.addEventListener("click", function () {
    isPoisonOpen = true;
    chemicalsClicked.push("poison");
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
    modal.style.display = "block";
    console.log("hazmat click");
});
ricin.addEventListener("click", function () {
    isRicin = true;
    chemicalsClicked.push(isRicin);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
    alert(`you found the ricin`);
    modal.style.display = "block";
    console.log("hazmat click");
})

// check if hazmat is worn, if false, you die
function safetyCheck() {
    if (isHazmatWorn) {
        successfulEndgame.style.display = "block";
        // alert("you have successfully made meth and you're alive");
    } else {
        noSuit.style.display = "block";
        // alert("you were successful in making product but you have died from not wearing protection");
    }
}

// check if right combo of chemicals
function checkForSafeCombo(...chemicals) {
    for (let i = 0; i < chemicals.length; i++) {
        if (chem1.isClicked && chem2.isClicked && chem3.isClicked && chem4.isClicked && !isPoisonOpen) {
            if (isRicin) {
                killGus.style.display = "block";
                // alert("you killed gus fring with ricin!");
            }
            return safetyCheck();
        } else if (isPoisonOpen) {
            poisonEndGame.style.display = "block";
            // alert("you exposed a dangerous chemical to air, causing an explosion. you have died");
        } else {
            console.log("still cooking");
        }
    }
}


// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const close = document.querySelector(".close");


// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
        console.log("webpage click to close");
    } else if (e.target == poisonEndGame) {
        poisonEndGame.style.display = "none";
    } else if (e.target == successfulEndgame) {
        successfulEndgame.style.display = "none";
    } else if (e.target == killGus){
        killGus.style.display = "none";
    } else if (e.target == noSuit) {
        noSuit.style.display = "none";
    } else {
        console.log("s;ljbv");
    }
})


