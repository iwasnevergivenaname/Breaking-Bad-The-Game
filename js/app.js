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
// closeup of items
const modal = document.getElementById("myModal");
const suitModal = document.getElementById("hazmat-suit");
const ricinBeans = document.getElementById("ricin-beans");
const galeNotebook = document.getElementById("gale-notebook");
const isoProp = document.getElementById("iso-alc");
const hydrochloride = document.getElementById("hydrochloride");
const methylamine = document.getElementById("methylamine");
const paa = document.getElementById("paa");
const phenlylacetic = document.getElementById("phenlylacetic");
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
    }
}

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
    showModal(suitModal);
});


notebook.addEventListener("click", function () {
    isNotebookOpen = true;
    showModal(galeNotebook);
});

isoAlc.addEventListener("click", function () {
    isClicked = true;
    showModal(isoProp);
});

chemOne.addEventListener("click", function () {
    chem1.isClicked = true;
    chemicalsClicked.push(chem1);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
    showModal(hydrochloride);
});

chemTwo.addEventListener("click", function () {
    chem2.isClicked = true;
    chemicalsClicked.push(chem2);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
    showModal(methylamine);
});

chemThree.addEventListener("click", function () {
    chem3.isClicked = true;
    chemicalsClicked.push(chem3);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
    showModal(paa);
});

chemFour.addEventListener("click", function () {
    chem4.isClicked = true;
    chemicalsClicked.push(chem4);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
    showModal(phenlylacetic);
});

poison.addEventListener("click", function () {
    isPoisonOpen = true;
    chemicalsClicked.push("poison");
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
    showModal(poisonEndGame);
});

ricin.addEventListener("click", function () {
    isRicin = true;
    chemicalsClicked.push(isRicin);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
    showModal(ricinBeans);
});

// check if right combo of chemicals
function checkForSafeCombo(...chemicals) {
    for (let i = 0; i < chemicals.length; i++) {
        if (chem1.isClicked && chem2.isClicked && chem3.isClicked && chem4.isClicked && !isPoisonOpen) {
            if (isRicin) {
                showModal(killGus);
            }
            return safetyCheck();
        } else if (isPoisonOpen) {
            showModal(poisonEndGame);
        } else {
            console.log("still cooking");
        }
    }
}

// check if hazmat is worn, if false, you die
function safetyCheck() {
    if (isHazmatWorn) {
        showModal(successfulEndgame);
    } else {
        showModal(noSuit);
    }
}

// show or hide pop up modal
function showModal(modal) {
    modal.style.display = "block";
}

function hideModal(modal) {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (e) {
    switch (e.target) {
        case modal:
            hideModal(modal);
            break;
        case suitModal:
            hideModal(suitModal);
            break;
        case poisonEndGame:
            hideModal(poisonEndGame);
            break;
        case successfulEndgame:
            hideModal(successfulEndgame);
            break;
        case killGus:
            hideModal(killGus);
            break;
        case noSuit:
            hideModal(noSuit);
            break;
        case ricinBeans:
            hideModal(ricinBeans);
            break;
        case galeNotebook:
            hideModal(galeNotebook);
            break;
        case isoProp:
            hideModal(isoProp);
            break;
        case hydrochloride:
            hideModal(hydrochloride);
            break;
        case methylamine:
            hideModal(methylamine);
            break;
        case paa:
            hideModal(paa);
            break;
        case phenlylacetic:
            hideModal(phenlylacetic);
            break;
        default:
            console.log("not working");

    }
});