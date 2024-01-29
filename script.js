"use strict";
let nomJoueur1;
let nomJoueur2;
const encartNomJoueur1 = document.getElementById('nomJoueur1');
const encartNomJoueur2 = document.getElementById('nomJoueur2');
const joueur1 = document.getElementById('joueur1');
const joueur2 = document.getElementById('joueur2');
const message = document.getElementById('message');
const contenuMessage = document.getElementById('contenuMessage');
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
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"],
]

function enregistrerPrenom(numeroJoueur) {
    if (numeroJoueur === 1) {
        nomJoueur1 = document.getElementById('valeurJoueur1').value;
        encartNomJoueur1.classList.add('none');
        encartNomJoueur2.classList.remove('none');
    } else if (numeroJoueur === 2) {
        nomJoueur2 = document.getElementById('valeurJoueur2').value;
        document.getElementById('prenoms').classList.add('none');
        document.getElementById('plateau').classList.remove('invisible');
        joueur1.querySelector('h2').innerHTML = nomJoueur1;
        joueur2.querySelector('h2').innerHTML = nomJoueur2;
    }

}

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
            contenuMessage.innerHTML = "<h3>Cette case est déjà remplie.</h3>";
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
        console.log('=====')
        console.log(victoire)
        if (victoire === "111") {
            afficherVictoire(1);
            matchNul = false;
            break dance;
        } else if (victoire === "222") {
            afficherVictoire(2);
            matchNul = false;
            break dance;
        }
    }

    if (verifierToutesCasesRemplies() && matchNul) {
        // On vérifie après que le joueur ait joué, pour savoir si c'était la dernière case vide.
        joueur1.style.visibility = "hidden";
        joueur2.style.visibility = "hidden";
        contenuMessage.innerHTML = "<h3>Match nul !</h3><p class='bouton' onclick='location.reload()'>Rejouer</p>";
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
    console.log(numeroJoueur)
    console.log(nomJoueur1)
    console.log(nomJoueur2)

    let NomJoueur = (numeroJoueur === 1) ? nomJoueur1 : nomJoueur2;
    console.log(NomJoueur)
    contenuMessage.innerHTML = `<h3>${NomJoueur} a gagné !</h3><p class='bouton' onclick='location.reload()'>Rejouer</p>`;
    message.classList.replace('invisible', 'succes');
    joueur1.style.visibility = "hidden";
    joueur2.style.visibility = "hidden";
}

function closeMessage() {
    message.classList.remove("erreur", "succes", "info");
    message.classList.add("invisible");
}