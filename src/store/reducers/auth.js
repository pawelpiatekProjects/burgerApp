import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../ut'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.AUTH_START:
            return{

            }
    }
};

export default reducer;