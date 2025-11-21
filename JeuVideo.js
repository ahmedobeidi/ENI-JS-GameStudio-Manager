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

    afficherEquipe() {
        console.info(`Équipe du projet ${this.#titre}`);
        this.#employes.forEach((employe) => {
            console.log(
                ` ${employe.prenom} ${employe.nom} (email : ${employe.email}, niveau : ${employe.niveau})`
            );
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