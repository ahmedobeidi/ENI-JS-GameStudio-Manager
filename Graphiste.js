import { Employe } from "./Employe.js";

export class Graphiste extends Employe {

    #logiciels;

    constructor(nom, prenom, email, niveau, logiciels) {
        super(nom, prenom, email, niveau);
        this.#logiciels = logiciels;
    }

    afficherDetail() {
        super.afficherDetail();
        console.log(
            `\t${this.prenom} crée des visuels avec ${this.#logiciels.join(", ")}`
        );
    }
}