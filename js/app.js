// connecting elements from the HTML to JS variables
const h1 = document.querySelector("h1");
const hazmatSuit = document.getElementById("hazmat");
const notebook = document.getElementById("notebook");
const isoAlc = document.getElementById("isopropyl-alc");
const chemOne = document.getElementById("chem-one");
const chemTwo = document.getElementById("chem-two");
const chemThree = document.getElementById("chem-three");
const chemFour = document.getElementById("chem-four");
const poison = document.getElementById("poison");
const ricin = document.getElementById("ricin");

// checks for used items
let isHazmatWorn = false;
let isNotebookOpen = false;
let isPoisonOpen = false;
let isRicin = false;

function Chemicals(name, isClicked) {
    this.name = name;
    isClicked = false;
}

let chem1 = new Chemicals("chemical one");
let chem2 = new Chemicals("chemical two");
let chem3 = new Chemicals("chemical three");
let chem4 = new Chemicals("chemical four");


// connecting my DOM elements to click functions
// h1.addEventListener("click", function() {
//     console.log("it was clicked");
// });
hazmatSuit.addEventListener("click", function () {
    isHazmatWorn = true;
    alert(`you clicked the suit`);
});
notebook.addEventListener("click", function () {
    isNotebookOpen = true;
    alert(`you clicked the notebook`);
});
isoAlc.addEventListener("click", function () {
    isClicked = true;
    alert("you clicked the isopropyl alcohol");
});
chemOne.addEventListener("click", function () {
    chem1.isClicked = true;
    chemicalsClicked.push(chem1);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
});
chemTwo.addEventListener("click", function () {
    chem2.isClicked = true;
    chemicalsClicked.push(chem2);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
});
chemThree.addEventListener("click", function () {
    chem3.isClicked = true;
    chemicalsClicked.push(chem3);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
});
chemFour.addEventListener("click", function () {
    chem4.isClicked = true;
    chemicalsClicked.push(chem4);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
});
poison.addEventListener("click", function () {
    isPoisonOpen = true;
    chemicalsClicked.push("poison");
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
});
ricin.addEventListener("click", function () {
    isRicin = true;
    chemicalsClicked.push(isRicin);
    console.log(chemicalsClicked);
    checkForSafeCombo(chemicalsClicked);
    alert(`you found the ricin`);
})
//
// class Chemicals {
//     constructor(name, isClicked) {
//         name: "name";
//         isClicked: false;
//     }
//
// }

// check if hazmat is worn, if false, you die
function safetyCheck() {
    if (isHazmatWorn) {
        alert("and you're alive");
    } else {
        alert("but you have died from not wearing protection");
    }
}

let chemicalsClicked = [];

// check if right combo of chemicals
function checkForSafeCombo(...chemicals) {
    for (let i = 0; i < chemicals.length; i++) {
        if (chem1.isClicked && chem2.isClicked && chem3.isClicked && chem4.isClicked && !isPoisonOpen) {
            alert("you made meth!");
            if (isRicin) {
                alert("you killed gus fring!");
            }
            return safetyCheck();
        } else if (isPoisonOpen) {
            alert("you have died");
        } else {
            console.log("still cooking");
        }
    }
}


// checkForSafeCombo(chemicals);
// console.log(chemicalsClicked);

// combining chemicals that have been clicked to create product
//     function toCook(...chemicals) {
//         let chemicalsPicked = [];
//         for (let )
//             }




