import { useEffect, useState } from "react";
import { lang, LangContext } from "./lang";
import { createGlobalStyle } from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import FirstSection from "./Components/FirstSection/FirstSection";
import StackSection from "./Components/StackSection/StackSection";

const GlobalStyles = createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
    font-size: 10px;
  }
  *{
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
      
  }
`;

function App() {
    const [language, setLanguaje] = useState(lang.es);
    useEffect(() => {
        const savedLang = localStorage.getItem("zambroniLang");
        if (!savedLang) {
            localStorage.setItem("zambroniLang", "es");
            setLanguaje(lang.es);
        } else {
            if (savedLang === "es") {
                setLanguaje(lang.es);
            } else {
                setLanguaje(lang.en);
            }
        }
    }, []);

    const toggleLanguage = () => {
        const savedLang = localStorage.getItem("zambroniLang");
        if (savedLang === "es") {
            localStorage.setItem("zambroniLang", "en");
            setLanguaje(lang.en);
        } else {
            localStorage.setItem("zambroniLang", "es");
            setLanguaje(lang.es);
        }
    };
    return (
        <>
            <GlobalStyles />
            <LangContext.Provider value={language}>
                <Navbar toggleLanguage={toggleLanguage} />
                <FirstSection />
                <StackSection />
            </LangContext.Provider>
        </>
    );
}

export default App;
