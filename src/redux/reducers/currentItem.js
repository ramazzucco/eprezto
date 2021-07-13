import { polizas } from '../../database/polizas';
import { type as findCurrentItem } from '../actions/findCurrentItem';

const defaultState = polizas;

function reducer(state = defaultState, action){
    switch (action.type) {
        case findCurrentItem: {
            return polizas.find( poliza => poliza.id === action.payload);
        }
        default:
            return state;
    }
}

export default reducer;