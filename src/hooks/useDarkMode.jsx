import React, { useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

    const useDarkMode = (key, initialValue) => {
    const [ mode, setMode ] = useLocalStorage(key, initialValue)

    useEffect(() => {
        let body = document.body.classList;
        if(mode === true) {
            body.add("dark-mode");
        } else {
            body.remove("dark-mode");
        }
    }, [mode])

    return [mode, setMode];
}

export default useDarkMode
