import ActionTypes from "../actionTypes";


const sayıArtır = (val) => {
    return { type: ActionTypes.count.Sayı_Artır, payload: val }
}
const sayıAzalt = (val) => {
    return { type: ActionTypes.count.Sayı_Azalt, payload: val }
}

const sayAction = { sayıArtır, sayıAzalt }

export default sayAction