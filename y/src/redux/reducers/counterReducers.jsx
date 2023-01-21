import ActionTypes from "../actionTypes";

const initialState = 0;
const countReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ActionTypes.count.Sayı_Artır:
            return state + action.payload;
        case ActionTypes.count.Sayı_Azalt:
            return state - action.payload;

        default:
            return state;
    }
}

export default countReducer; 