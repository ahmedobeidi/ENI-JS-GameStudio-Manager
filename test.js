import {JeuVideo} from "./Jeuvideo.js";
import {Tache} from "./Tache.js";
import {Employe} from "./Employe.js";
import {TypesDeTaches} from "./TypesTaches.js";
import {Developpeur} from "./Developpeur.js";
import {Graphiste} from "./Graphiste.js";

let jeu = new JeuVideo("ENI", "Réflexion", "PC", new Date(Date.now()));
const t1 = new Tache("Regle 12", "Créer les questions chances", TypesDeTaches.DEVELOPPEUR.GAMEPLAY, Tache.Priorites.Could);
jeu.ajouterTache(t1);
const t2 = new Tache("La blibliothèque", "Déplacer le joueur dans la blibliothèque", TypesDeTaches.GRAPHISTE.ANIMATION, Tache.Priorites.Should);
jeu.ajouterTache(t2);
const t3 = new Tache("Erreur 567", "Impossible de répondre à la question", TypesDeTaches.DEVELOPPEUR.DEBUG, Tache.Priorites.Must);
jeu.ajouterTache(t3);

const t4 = new Tache("Erreur 687", "Déplacement impossible", TypesDeTaches.DEVELOPPEUR.DEBUG, Tache.Priorites.Should, Tache.Statuts.InProgress);
jeu.ajouterTache(t4);
const t5 = new Tache("Erreur 688", "NUL sur la question", TypesDeTaches.DEVELOPPEUR.DEBUG, Tache.Priorites.Must, Tache.Statuts.InProgress);
jeu.ajouterTache(t5);


let dev1 = new Developpeur("Haut", "Paul", "paulhaut@enijeu.fr", Employe.Niveaux.JUNIOR, ["JavaScript", "C#"]);
let dev2 = new Developpeur("Hot", "Charles", "charleshot@enijeu.fr", Employe.Niveaux.EXPERT, ["JavaScript", "C#", "Java"]);
let graphiste1 = new Graphiste("Claire", "Marie", "marieclaire@enijeu.fr", Employe.Niveaux.SENIOR, ["Photoshop", "Blender"]);

jeu.ajouterEmploye(dev1);
jeu.ajouterEmploye(dev2);
jeu.ajouterEmploye(graphiste1);

console.info("\n -- EQUIPE --");
// jeu.afficherEquipe();
console.info("\n -- PROJET --");
// jeu.afficherProjet();

// Attribuer les tâches TO DO à un Employe selon son poste
// console.log("-- ATTRIBUER TACHE TODO --");
// jeu.attribuerTachesTodoNonAttribuees();

// Attribution manuelle des tâches en IN PROGRESS - elles devraient déjà être chez quelqu'un
t4.assignerEmploye(dev2);
t5.assignerEmploye(dev2);

// console.info("\n-- FAIRE TRAVAILLER TOUTE SON EQUIPE --");
// jeu.equipe.forEach(e => e.travailler());

// console.log("-- ETAT DU PROJET EN FIN DE JOURNEE --");
// jeu.afficherProjet();