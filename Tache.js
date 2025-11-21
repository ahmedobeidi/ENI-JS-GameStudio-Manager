export class Tache {

    static Priorites = {Must: "Must", Should: "Should", Could: "Could"};
    static Statuts = {Todo: "Todo", InProgress: "InProgress", Done: "Done"};

    #titre;
    #description;
    #type;
    #priorite;
    #statut;
    #employe;

    constructor(titre, description, type, priorite, statut = "Todo") {
        this.#titre = titre;
        this.#description = description;
        this.#type = type;
        this.#priorite = priorite;
        this.#statut = statut;
    }

    // Getters
    get titre() {
        return this.#titre;
    }

    get description() {
        return this.#description;
    }

    get type() {
        return this.#type;
    }

    get priorite() {
        return this.#priorite;
    }

    get statut() {
        return this.#statut;
    }

    get employe() {
        return this.#employe;
    }

    assignerEmploye(employe) {
        this.#employe = employe;
        employe.ajouterTache(this);
    }

    changerStatut(nouveauStatut) {
        if (!Object.values(Tache.Statuts).includes(nouveauStatut)) {
            console.log("Erreur.");
            return;
        }

        this.#statut = nouveauStatut;
    }

    afficherTache() {
        console.log(
            `- ${this.#titre}\n` +
            `\t(description  : ${this.#description},\n` +
            `\ttype : ${this.#type},\n` +
            `\tpriorité : ${this.#priorite},\n` +
            `\tstatut : ${this.#statut})`
        );
    }
}