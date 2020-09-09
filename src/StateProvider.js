import React, { createContext, useContext, useReducer } from 'react';

// prepara el "data layer"
export const StateContext = createContext();

// cubre nuestra aplicación y proveé el "data layer" a cada componente
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// obtiene información del "data layer"
export const useStateValue = () => useContext(StateContext);
