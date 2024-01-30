# morpion-JS

Exercice JS, construire la logique et les interactions avec les utilisateurs.

## Consignes
### A) Préparation du plateau
1. Télécharger les fichiers html et css. Le script sera à créer entièrement, celui qui est ici est la correction.
2. D'abord, on anime les blocs HTML lors des clics sur les boutons "valider", pour faire disparaître nomJoueur1 et apparaître nomJoueur2, puis tout le bloc prenoms pour laisser la place au plateau. Utiliser les classes existantes.
3. Ensuite, récupérer les prénoms des inputs, et les stocker dans deux variables.
4. Faire apparaître les noms choisis par les joueurs dans les <h2> des deux joueurs.

### B) Animation du plateau
1. Faire en sorte qu'à chaque clic sur une case, la fonction selectCase appelle une autre fonction pour qu'il y ait une animation (représentée par la classee "clicked"), qui dure 0.2s avant d'être enlevée.
2. Ajouter qu'à chaque clic, on change de joueur, en créant une fonction changerJoueur().
3. Poser un pion différent (X et O) sur le plateau à chaque clic, avec les X pour le joueur 1 et O pour le joueur 2.
4. En plus de poser le pion sur le plateau, on veut garder en mémoire les différentes actions des joueurs. Sauvegarder dans le tableau ci-dessous les actions, 0 pour aucune action, 1 et 2 respectivement pour joueur 1 et 2.
```js
let morpion = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
```
*AIDE : Chaque case HTML a un ID qui permet de la situer dans ce tableau. 00 => ligne 0, colonne 0. 21 => ligne 2, colonne 1. etc.
séparer (split) ces deux chiffres, et enregistrer chaque action des joueurs au bon endroit dans le tableau.*

5. Faire une fonction pour vérifier si toutes les cases sont remplies, qui renvoie true ou false.
6. En fonction du retour de cette fonction afficher dans la console "match nul".
7. Ensuite, faire une fonction qui sera appelée avant l'enregistrement du coup d'un joueur, pour s'assurer que la case est libre. Si quelqu'un a déjà joué dans cette case, afficher dans la console une erreur "cette case est déjà remplie".
8. Construire un tableau qui contient toutes les solutions possibles pour gagner. Il y en a 8.
9. Pour chaque solution, vérifier si dans le tableau morpion, il n'y a que des 1 (dans ce cas, joueur 1 a gagné), ou des 2 (c'est joueur 2 qui a gagné), et afficher dans la console la victoire.
10. Tout ce qui est affiché dans la console doit maintenant être affiché à l'utilisateur. Pour cela, utiliser la div "message", lui donner le texte que vous voulez, et choisir dans le css la classe qui vous convient pour chaque catégorie de message : erreur, succes, info.
11. Lors d'un match nul ou d'une victoire, mettre un bouton "rejouer" avec la classe qui convient, et au clic sur ce bouton, recharger la page.
12. Enfin, ajouter une croix pour fermer la popup "message", pour permettre aux joueurs de voir leurs coups. 
