import { useState, createContext, useContext } from 'react';

const StoreContext = createContext();

export function StoreProvider(props) {
    const [globalState, setGlobalState] = useState({
        tasks: [],
        loading: true,
        darkMode: false,
        title: 'Some Example Title'
    });

    return (
        <StoreContext.Provider value={{...globalState, setGlobalState}}>
            {props.children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext);