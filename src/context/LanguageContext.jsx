import { createContext, useState, useContext } from 'react';
import data from './language';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
 const [language, setLanguage] = useState('id');

 const translations = data;

 return (
   <LanguageContext.Provider value={{ language, setLanguage, translations }}>
     {children}
   </LanguageContext.Provider>
 );
};

export const useLanguage = () => useContext(LanguageContext);
