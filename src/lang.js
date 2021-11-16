import React from "react";

export const lang = {
    es: {
        nav: {
            lang: "Idioma",
            work: "Trabajos",
            tech: "Tecnologías",
            contact: "Contacto",
        },
    },
    en: {
        nav: {
            lang: "Language",
            work: "Work",
            tech: "Tech Stack",
            contact: "Contact",
        },
    },
};

export const LangContext = React.createContext(lang.es);
