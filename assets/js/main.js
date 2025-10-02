/**
 * Le coffre fort du musée
 * Solution modèle minimale de l'exercice #1
 * @author Camille Semaan
 */

/************************* REMARQUE IMPORTANTE ********************************/
// Il est important de noter que la solution donnée ici est minimale et utilise
// uniquement les éléments de programmation et de code JS vus en classe.
/******************************************************************************/

/** @type {HTMLCanvasElement} */
let oCanvas = document.querySelector("#scene");
let oCtx = oCanvas.getContext("2d");

// Combinaison du coffre fort
const nCombinaison1 = 0;
const nCombinaison2 = 0;
const nCombinaison3 = 7;

// Saisie des chiffres par l'utilisateur
let nChiffre1 = Number(prompt("Devinez le premier chiffre du numéro"));
let nChiffre2 = Number(prompt("Devinez le deuxième chiffre du numéro"));
let nChiffre3 = Number(prompt("Devinez le troisième chiffre du numéro"));

// Dessine un fond noir
oCtx.fillStyle = "black";
oCtx.fillRect(200, 150, 500, 300);

// Dimensions des rectangles (rouge ou vert) à dessiner.
let largeurRectangle = 100; 
let hauteurRectangle = 200; 

// On vérifie chaque chiffre et on dessine un rectangle vert ou rouge selon le cas
// Premier chiffre
if (nChiffre1 === nCombinaison1) {
    oCtx.fillStyle = "green";
} else {
    oCtx.fillStyle = "red";
}
oCtx.fillRect(250, 200, largeurRectangle, hauteurRectangle);

// Deuxième chiffre
if (nChiffre2 === nCombinaison2) {
    oCtx.fillStyle = "green";
} else {
    oCtx.fillStyle = "red";
}
oCtx.fillRect(300 + largeurRectangle, 200, largeurRectangle, hauteurRectangle);

// Troisième chiffre
if (nChiffre3 === nCombinaison3) {
    oCtx.fillStyle = "green";
} else {
    oCtx.fillStyle = "red";
}
oCtx.fillRect(350 + 2 * largeurRectangle, 200, largeurRectangle, hauteurRectangle);

// Message de succès si tous les chiffres sont corrects
if (nChiffre1 === nCombinaison1 && nChiffre2 === nCombinaison2 && nChiffre3 === nCombinaison3) {
    alert("Félicitations ! Le coffre est ouvert.");
}
else {
    alert("Dommage, ce n'est pas le bon code.");
}1