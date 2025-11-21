import {JeuVideo} from "./JeuVideo.js";
import {Tache} from "./Tache.js";
import {Employe} from "./Employe.js";

// console.log("-- NIVEAU REQUIS --");
let jeu = new JeuVideo("ENI", "Réflexion", "PC", new Date(Date.now()));
const t1 = new Tache("Regle 12", "Créer les questions chances", "Programmation_Gameplay", Tache.Priorites.Could);
jeu.ajouterTache(t1);
const t2 = new Tache("La blibliothèque", "Déplacer le joueur dans la blibliothèque", "Animation", Tache.Priorites.Should);
jeu.ajouterTache(t2);
const t3 = new Tache("Erreur 567", "Impossible de répondre à la question", "Debogage ", Tache.Priorites.Must);
jeu.ajouterTache(t3);

const t4 = new Tache("Erreur 687", "Déplacement impossible", "Debogage", Tache.Priorites.Should, Tache.Statuts.InProgress);
jeu.ajouterTache(t4);
const t5 = new Tache("Erreur 688", "NUL sur la question", "Debogage ", Tache.Priorites.Must, Tache.Statuts.InProgress);
jeu.ajouterTache(t5);

let dev1 = new Employe("Haut", "Paul", "paulhaut@enijeu.fr", Employe.Niveaux.JUNIOR);
let graphiste1 = new Employe("Claire", "Marie", "marieclaire@enijeu.fr", Employe.Niveaux.SENIOR);

jeu.ajouterEmploye(dev1);
jeu.ajouterEmploye(graphiste1);

console.info(" -- EQUIPE --");
jeu.afficherEquipe();
console.info("\n -- PROJET --");
jeu.afficherProjet();


// console.log("\n-- NIVEAU INTERMEDIAIRE --");
// Gérer l'association Employe-Tache
t1.assignerEmploye(dev1);
t3.assignerEmploye(dev1);
t4.assignerEmploye(dev1);
t5.assignerEmploye(dev1);

t2.assignerEmploye(graphiste1);

console.info("\n-- AU TRAVAIL --");
dev1.travailler();
graphiste1.travailler();