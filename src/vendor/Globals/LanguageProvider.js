import React, { createContext, useCallback, useContext, useState } from 'react'
import en from '../i18n/en';
import fr from '../i18n/fr';

const LanguageContext = createContext('fr');

export function useLanguage() {
    return useContext(LanguageContext);
}

export default function LanguageProvider({
    children
}) {

    const [currentLanguage, setCurrentLanguage] = useState('fr');

    const getTraductionOf = useCallback((section) => {
        return currentLanguage === 'en' ? en[section] : fr[section];
    }, [currentLanguage]);

    return (
        <LanguageContext.Provider value={{
            currentLanguage,
            setCurrentLanguage,
            getTraductionOf
        }}>
            {children}
        </LanguageContext.Provider>
    )
}
