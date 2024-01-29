"use strict";
const joueur1 = document.getElementById('joueur1');
const joueur2 = document.getElementById('joueur2');
const message = document.getElementById('message');
let joueur = 1;
let morpion = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
let solutions = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["20", "21", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"],
]


function selectCase(idCase) {
    animationClic(idCase);
    let ligne = idCase.split('')[0];
    let colonne = idCase.split('')[1];

    enregistrerPion(idCase, joueur, ligne, colonne);
    joueur = changerJoueur(joueur);
    victoire();
}



function animationClic(idCase) {
    document.getElementById(idCase).classList.toggle('clicked');
    setTimeout(() => {
        document.getElementById(idCase).classList.toggle('clicked');
    }, 200)
}



function enregistrerPion(idCase, joueur, ligne, colonne) {
    // On vérifie avant de placer le pion, que le joueur peut bien jouer.
    if (!verifierToutesCasesRemplies()) {
        if (morpion[ligne][colonne] === 0) {
            morpion[ligne][colonne] = joueur;
            placerPionPlateau(joueur, idCase);
        } else {
            console.log("Cette case est déjà remplie");
            message.innerHTML = "<h3>Cette case est déjà remplie.</h3>";
            message.classList.replace('invisible', 'erreur');
            setTimeout(() => {
                message.classList.replace('erreur', 'invisible');
            }, 2000);
        }

    }
}


function verifierToutesCasesRemplies() {
    let rempli = true;
    dance:
    for (let ligne of morpion) {
        for (let colonne of ligne) {
            if (colonne === 0) {
                rempli = false;
                break dance;
            }
        }
    }
    return rempli;
}

function victoire() {
    let matchNul = true;
    dance:
    for (let ligne of solutions) {
        let victoire = "";
        for (let place of ligne) {
            let ligneMorpion = place.split('')[0];
            let colonneMorpion = place.split('')[1];
            victoire += morpion[ligneMorpion][colonneMorpion];

        }
        if (victoire === "111") {
            afficherVictoire('1');
            matchNul = false;
            break dance;
        } else if (victoire === "222") {
            afficherVictoire('1');
            matchNul = false;
            break dance;
        }
    }

    if (verifierToutesCasesRemplies() && matchNul) {
        // On vérifie après que le joueur ait joué, pour savoir si c'était la dernière case vide.
        joueur1.style.visibility = "hidden";
        joueur2.style.visibility = "hidden";
        message.innerHTML = "<h3>Match nul !</h3><p class='bouton' onclick='location.reload()'>Rejouer</p>";
        message.classList.replace('invisible', 'info');
    }
}

function placerPionPlateau(joueur, selectedCase) {
    selectedCase = document.getElementById(selectedCase);
    if (joueur === 1) {
        selectedCase.innerHTML = "X";
    } else {
        selectedCase.innerHTML = "O";

    }
}


function changerJoueur(joueur) {
    if (joueur === 1) {
        joueur1.classList.toggle('hidden');
        joueur2.classList.toggle('hidden');
        joueur = 2;
    } else {
        joueur1.classList.toggle('hidden');
        joueur2.classList.toggle('hidden');
        joueur = 1;
    }
    return joueur;
}

function afficherVictoire(numeroJoueur) {
    message.innerHTML = `<h3>Joueur ${numeroJoueur} a gagné !</h3><p class='bouton' onclick='location.reload()'>Rejouer</p>`;
    message.classList.replace('invisible', 'succes');
    joueur1.style.visibility = "hidden";
    joueur2.style.visibility = "hidden";
}