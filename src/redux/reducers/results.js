
import { polizas } from '../../database/polizas';

const defaultState = polizas;

function reducer(state = defaultState, action){
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;