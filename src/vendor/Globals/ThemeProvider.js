import React, { createContext, useCallback, useContext, useState } from 'react'

const ThemeContext = createContext('light');

export function useTheme() {
    return useContext(ThemeContext);
}

export default function ThemeProvider({
    children
}) {

    const [theme, setTheme] = useState('light');
    const changeTheme = useCallback(() => {
        setTheme(theme === 'light' ? 'dark': 'light');
    }, [theme]);

    return (
        <ThemeContext.Provider value={{
            theme, changeTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
