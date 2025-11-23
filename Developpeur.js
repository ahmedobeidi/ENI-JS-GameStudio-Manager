import { Employe } from "./Employe.js";

export class Developpeur extends Employe {

    #langages;

    constructor(nom, prenom, email, niveau, langages) {
        super(nom, prenom, email, niveau);
        this.#langages = langages;
    }

    afficherDetail() {
        super.afficherDetail();
        console.log(
            `\t${this.prenom} code en ${this.#langages.join(", ")}`
        );
    }
}