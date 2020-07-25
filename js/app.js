const h1 = document.querySelector("h1");
const hazmatSuit = document.getElementById("hazmat");
const notebook = document.getElementById("notebook");
const isoAlc = document.getElementById("isopropyl-alc");

console.log(hazmatSuit);
console.log(notebook);
console.log(isoAlc);

h1.addEventListener("click", function() {
    console.log("it was clicked");
})
hazmatSuit.addEventListener("click", function() {
    console.log("you clicked the suit");
})
notebook.addEventListener("click", function ()  {
    console.log("you clicked the notebook");
})

isoAlc.addEventListener("click", function () {
    console.log("you clicked the isopropyl alcohol");
})


