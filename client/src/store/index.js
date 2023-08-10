import { useState, createContext, useContext } from 'react';



function storeProvider() {
    const [globalState, setGlobalState] = useState({
        tasks: [],
        loading: true,
        darkMode: false
    });
}