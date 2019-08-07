import { Chien } from 'src/app/modeles/chien.modele';

const liste: Chien[] = [
    {nom: 'Zzzz', couleur: 'rose', truc: 1},
    {nom: 'Aaaa', couleur: 'vert', truc: 2},
    {nom: 'Mmmm', couleur: 'jaune', truc: 3},
    {nom: 'Ssss', couleur: 'noir', truc: 4},
    {nom: 'Iiii', couleur: 'bleu', truc: 5},
    {nom: 'Pppp', couleur: 'violet', truc: 6},
    {nom: 'Dddd', couleur: 'blanc', truc: 7},
    {nom: 'Hhhh', couleur: 'orange', truc: 8},
    {nom: 'Nnnn', couleur: 'livre', truc: 9},
];

export const INITIAL_STATE = {
    data: liste
};
