let tryThis = ["chem1", "chem2", "chem3"];

// function checkForSafeCombo(...chemicals) {
//     let clicks = [];
//     for (let i = 0; i < chemicals.length; i++) {
//         console.log(chemicals[i]);
//         // console.log(clicks);
//         if ("chem1" && "chem4" && "chem2" && "chem3") {
//             console.log(tryThis);
//             console.log("win");
//         } else {
//             console.log("still cooking");
//         }
//     }
// }
//
// checkForSafeCombo(tryThis);
//
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let n = fruits.includes("Banana" && "Apple");
// console.log(n);

let x = tryThis.includes("chem1" && "chem4" && "chem2" && "chem3");
console.log(x);