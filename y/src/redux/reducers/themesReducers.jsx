import ActionTypes from "../actionTypes";
const initialState = { backgroundColor: 'red', height: '300px', width: '100%' };
const lightTheme = { backgroundColor: 'white', height: '300px', width: '100%' };
const darkTheme = { backgroundColor: 'black', height: '300px', width: '100%' };
const temaReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.tema.Açıq_Tema:
            return lightTheme;
        case ActionTypes.tema.Tünd_Tema:
            return darkTheme
        default:
            return state
    }
}

export default temaReducer;