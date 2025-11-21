export class Employe {

    static Niveaux = { JUNIOR: "Junior", SENIOR: "Senior" };

    #nom;
    #prenom;
    #email;
    #niveau;
    #taches;

    constructor(nom, prenom, email, niveau) {
        this.#nom = nom;
        this.#prenom = prenom;
        this.#email = email;
        this.#niveau = niveau;
        this.#taches = [];
    }

    // Getters
    get nom() {
        return this.#nom;
    }

    get prenom() {
        return this.#prenom;
    }

    get email() {
        return this.#email;
    }

    get niveau() {
        return this.#niveau;
    }

    ajouterTache(tache) {
        this.#taches.push(tache);
    }

    trouverTachesParStatut(statut) {
        let taches = this.#taches.filter((tache) => tache.statut === statut);
        return taches;
    }

    trierTachesParPriorite(taches) {
        let mustArr = [];
        let shouldArr = [];
        let couldArr = [];
        let tachesParPriorite = [];

        taches.forEach((tache) => {
            if (tache.priorite === "Must") {
                mustArr.push(tache);
            }
            else if (tache.priorite === "Should") {
                shouldArr.push(tache);
            }
            else if (tache.priorite === "Could") {
                couldArr.push(tache);
            }
        });

        tachesParPriorite = mustArr.concat(shouldArr, couldArr);
        return tachesParPriorite;
    }

    terminerTachesInProgress() {
        let taches = this.trouverTachesParStatut("InProgress");
        taches = this.trierTachesParPriorite(taches);

        console.log(`\n-- ${this.#prenom} gère ses tâches IN PROGRESS --`);

        taches.forEach((tache) => {
            console.log(
                `${this.#prenom} travaille sur la tàche : ${tache.titre}\n` +
                `\t - tàche terminée`
            );            
            tache.changerStatut("Done");
            tache.afficherTache();
        })

        console.log();
    }

    travaillerTachesTodo() {
        let taches = this.trouverTachesParStatut("Todo");
        taches = this.trierTachesParPriorite(taches);

        console.log(`-- ${this.#prenom} gère ses tâches TODO --`);

        taches.forEach((tache) => {
            console.log(
                `${this.#prenom} travaille sur la tàche : ${tache.titre}\n` +
                `\t - tâche arrêtée pour aujourd’hui`
            );

            tache.changerStatut("InProgress");
            tache.afficherTache();
        })
    }

    travailler() {
        this.terminerTachesInProgress();
        this.travaillerTachesTodo();
        console.log(`${this.#prenom} a fini de travailler.`);
    }
}