import { Injectable } from '@angular/core';

import { Chien } from 'src/app/modeles/chien.modele';
import { Store } from '@ngrx/store';
import { SupprimerChien } from 'src/app/actions/chien.actions';

@Injectable({
  providedIn: 'root'
})
export class ChienService {

  liste: Chien[] = [
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

  constructor(
    private store: Store<{chien: object}>
  ) { }

  supprimer(chien) {
    const chienASupprimer = this.liste.findIndex(
      (chiendex) => {
        if (chiendex === chien) {
          return true;
        }
      }
    );
    this.liste.splice(chienASupprimer, 1);
    this.store.dispatch(new SupprimerChien(this.liste));
  }

}
