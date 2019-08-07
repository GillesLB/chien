import { ActionsChien } from 'src/app/actions/chien.actions';

import { INITIAL_STATE } from 'src/app/store/INITIAL_STATE';
import { ACTIONS } from 'src/app/actions/ACTIONS';

export function chienReducer(state = INITIAL_STATE, action: ActionsChien) {
    switch (action.type) {
        case ACTIONS.GET_ADD_DOG:
            const chienAAjouter = action.payload;
            return {
                ...state,
                data: [...state.data, chienAAjouter]
            };
        case ACTIONS.GET_DELETE_DOG:
            const chienASupprimer = action.payload;
            return {
                data: chienASupprimer
            };
        case ACTIONS.GET_SHOW_DOG:
            return state;
        default:
            return state;
    }

}
