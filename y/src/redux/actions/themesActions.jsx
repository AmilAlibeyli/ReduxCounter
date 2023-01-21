import ActionTypes from "../actionTypes";
const açıqTema = (val) => {
    return ({
        type: ActionTypes.tema.Açıq_Tema,
        payload: val
    })
}

const tündTema = (val) => {
    return ({
        type: ActionTypes.tema.Tünd_Tema,
        payload: val
    })
}

const temaAction = { açıqTema, tündTema };
export default temaAction;