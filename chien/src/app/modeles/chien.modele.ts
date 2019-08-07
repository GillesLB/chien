export interface IChien {
    nom: string;
    couleur: string;
    truc: number;
}

export class Chien implements IChien {

    constructor(
        public nom: string,
        public couleur: string,
        public truc: number,
    ) {}

}
