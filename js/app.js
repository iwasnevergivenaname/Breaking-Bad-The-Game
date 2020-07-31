const btn = document.querySelector("button");
btn.addEventListener("click", function () {
    location.reload(true);
});

const cookBtn = document.getElementById("cook");
cookBtn.addEventListener("click", function () {
    checkForSafeCombo(chemicalsClicked);
})

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
const chemFive = document.getElementById("chem-five");
const chemSix = document.getElementById("chem-six");
const chemSeven = document.getElementById("chem-seven");
const poison = document.getElementById("poison");
const ricin = document.getElementById("ricin");
const gallonCan = document.getElementById("gallon-can");
const cellphone = document.getElementById("cellphone");

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
const fakeChem = document.getElementById("fake-chem");
const gallonModal = document.getElementById("tin-gallon-can");
const cellphoneModal = document.getElementById("cellphone-close-up");
// const gallonCan = document.getElementById("gallon-can");
// endgame notifications
const poisonEndGame = document.getElementById("poison-death");
const successfulEndgame = document.getElementById("successful-product");
const noSuit = document.getElementById("no-suit");
const killer = document.getElementById("killer-product");
const incomplete = document.getElementById("incomplete-batch");
const dead = document.getElementById("dead-product");
const doubleDeath = document.getElementById("double-killer-product");

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

// gallonCan.addEventListener("click", function() {
//     console.log("clicked galloncan");
//     showModal(gallonCan)
// })

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
    chemicalsClicked.push("chem1");
    console.log(chemicalsClicked);
    showModal(hydrochloride);
});

chemTwo.addEventListener("click", function () {
    chem2.isClicked = true;
    chemicalsClicked.push("chem2");
    console.log(chemicalsClicked);
    showModal(methylamine);
});

chemThree.addEventListener("click", function () {
    chem3.isClicked = true;
    chemicalsClicked.push("chem3");
    console.log(chemicalsClicked);
    showModal(paa);
});

chemFour.addEventListener("click", function () {
    chem4.isClicked = true;
    chemicalsClicked.push("chem4");
    console.log(chemicalsClicked);
    showModal(phenlylacetic);
});

chemFive.addEventListener("click", function () {
    showModal(fakeChem);
});

chemSix.addEventListener("click", function () {
    showModal(fakeChem);
});

chemSeven.addEventListener("click", function () {
    showModal(fakeChem);
});

cellphone.addEventListener("click", function () {
    showModal(cellphoneModal);
});

gallonCan.addEventListener("click", function () {
    showModal(gallonModal);
});

poison.addEventListener("click", function () {
    isPoisonOpen = true;
    chemicalsClicked.push("poison");
    console.log(chemicalsClicked);
    showModal(poisonEndGame);
});

ricin.addEventListener("click", function () {
    isRicin = true;
    chemicalsClicked.push(isRicin);
    console.log(chemicalsClicked);
    showModal(ricinBeans);
});


// show or hide pop up modal
function showModal(modal) {
    modal.style.display = "block";
}

function showEndGame(modal) {
    window.setTimeout(function () {
        modal.style.display = "block";
    }, 1000);
}

function hideModal(modal) {
    modal.style.display = "none";
}


// // check if right combo of chemicals
function checkForSafeCombo(chemicals) {
    // chemicalsClicked;
    if (chemicals.length < 4) {
        showModal(incomplete);
    } else if (chemicals.length > 3) {
        // return results;
        if (chemicals.includes("chem1", "chem2", "chem3", "chem4")) {
            console.log(chemicals);
            console.log("you have them all");
            if (!isHazmatWorn && !isRicin) {
                showEndGame(dead);
            } else if (isHazmatWorn && !isRicin) {
                showEndGame(successfulEndgame);
            } else if (isHazmatWorn && isRicin) {
                showEndGame(killer);
            } else if (!isHazmatWorn && isRicin) {
                showEndGame(doubleDeath);
            } else {
                console.log("hm this is coming from the chemical check");
            }
        } else {
            console.log("there should be more chemicals");
            showEndGame(incomplete);
        }
    } else {
        console.log("outside of else if length check")
    }
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
        case killer:
            hideModal(killer);
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
        case incomplete:
            hideModal(incomplete);
            break;
        case dead:
            hideModal(dead);
            break;
        case doubleDeath:
            hideModal(doubleDeath);
            break;
        case fakeChem:
            hideModal(fakeChem);
            break;
        case gallonModal:
            hideModal(gallonModal);
            break;
        case cellphoneModal:
            hideModal(cellphoneModal);
            break;
        default:
            console.log("not working");
    }
})