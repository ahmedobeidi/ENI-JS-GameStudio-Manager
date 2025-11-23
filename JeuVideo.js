import { Developpeur } from "./Developpeur.js";
import { Graphiste } from "./Graphiste.js";
import { TypesDeTaches } from "./TypesTaches.js";

export class JeuVideo {

    #titre;
    #genre;
    #platforme;
    #dateDebut;
    #taches;
    #employes;

    constructor(titre, genre, platforme, dateDebut) {
        this.#titre = titre;
        this.#genre = genre;
        this.#platforme = platforme;
        this.#dateDebut = this.formatDate(dateDebut);
        this.#taches = [];
        this.#employes = [];
    }

    formatDate(date) {
        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };

        const dateFormatee = date.toLocaleDateString("fr-FR", options);
        return dateFormatee;
    }

    ajouterTache(tache) {
        this.#taches.push(tache);
    }

    ajouterEmploye(employe) {
        this.#employes.push(employe);
    }

    chercherTachesTodoNonAttribuees() {
        let taches = this.#taches.filter((tache) => (tache.statut === "Todo" && !tache.employe));
        return taches;
    }

    chercherEmployePourTypeTache(typeTache) {
        let typeInstanceOf;
        let employe;

        // Convertir les valeurs d'objet en tableaux
        let developpeurTypesTaches = Object.values(TypesDeTaches.DEVELOPPEUR);
        let graphisteTypesTaches = Object.values(TypesDeTaches.GRAPHISTE);

        developpeurTypesTaches.forEach((type) => {
            if (type === typeTache) typeInstanceOf = "Developpeur";
        });

        graphisteTypesTaches.forEach((type) => {
            if (type === typeTache) typeInstanceOf = "Graphiste";
        });

        for (let e of this.#employes) {
            if (e instanceof Developpeur && typeInstanceOf === "Developpeur") {
                employe = e;
                break;
            }
            else if (e instanceof Graphiste && typeInstanceOf == "Graphiste") {
                employe = e
                break;
            };
        }

        console.log(employe.nom);
        

        return employe;
    }

    afficherEquipe() {
        console.info(`Équipe du projet ${this.#titre}`);
        this.#employes.forEach((employe) => {
            employe.afficherDetail();
        });
    }

    afficherTache() {
        console.info("-- Les tâches :");
        this.#taches.forEach((tache) => {
            tache.afficherTache();
        });
    }

    afficherProjet() {
        console.log(
            `Projet ${this.#titre}\n` +
            `\t(date : ${this.#dateDebut},\n` +
            `\tgenre : ${this.#genre},\n` +
            `\tplatforme : ${this.#platforme}).`
        );
        this.afficherTache();
    }
}