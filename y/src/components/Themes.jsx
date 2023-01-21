import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../redux/actions';

function Themes() {
    const tema = useSelector(state => state.temaReducer);
    const dispatch = useDispatch();

    return (
        <div style={tema}>
            <button onClick={() => dispatch(Actions.temaAction.tündTema())}>Tünd_Tema</button>
            <button onClick={() => dispatch(Actions.temaAction.açıqTema())}>Açıq_Tema</button>
        </div>
    );
}

export default Themes