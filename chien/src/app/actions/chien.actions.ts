import { ACTIONS } from 'src/app/actions/ACTIONS';

import { Action } from '@ngrx/store';

import { IChien, Chien } from 'src/app/modeles/chien.modele';

export class AjouterChien implements Action {
    readonly type = ACTIONS.GET_ADD_DOG;
    constructor(
        public payload: IChien
    ) {}
}

export class SupprimerChien implements Action {
    readonly type = ACTIONS.GET_DELETE_DOG;
    constructor(
        public payload: Chien[]
    ) {}
}

export class ListeChiens {
    readonly type = ACTIONS.GET_SHOW_DOG;
}

export type ActionsChien = AjouterChien | SupprimerChien;