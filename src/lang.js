import React from "react";

export const lang = {
    es: {
        nav: {
            lang: "Idioma",
            work: "Trabajos",
            tech: "Tecnologías",
            contact: "Contacto",
        },
        firstSection: {
            titleSection: {
                title: "¡Hola!",
                text: "Soy un desarrollador web full stack",
            },
            bioSection: {
                title: "Breve biografía",
                text: "Nací el 27 de abril de 1998 en Neuquén, viví toda mi vida allí y estudié un tiempo Ingenieria Informática en la UBA (Universidad de Buenos Aires), ahora me dedico 100% a el desarrollo de aplicaciones web, principalmente con el stack MERN. ",
            },
            studiesSection: {
                title: "Estudios y Cursos",
                item1: {
                    institution: "Instituto Tecnológico del Comahue",
                    course: `Técnico electrónico en automatización y control de
                    procesos | 2010 - 2016`,
                },
                item2: {
                    institution: "Universidad de Buenos Aires",
                    course: `Ingeniería Informática (En curso) | 2017 - 2020`,
                },
                item3: {
                    institution: "Universidad Tecnológica Nacional",
                    course: `Diplomatura en programación web full stack con React
                    JS | 08/2020 - 02/2021`,
                },
            },
        },
    },
    en: {
        nav: {
            lang: "Language",
            work: "Work",
            tech: "Tech Stack",
            contact: "Contact",
        },
        firstSection: {
            titleSection: {
                title: "¡Hello!",
                text: "I'm a full stack web developer",
            },
            bioSection: {
                title: "Short biography",
                text: `I was born on April 27, 1998 in Neuquén Argentina, I lived all my life there and studied for a while
                Computer Engineering at the UBA (University of Buenos Aires).
                Now I am 100% dedicated to web application development, mainly with the MERN stack.`,
            },
            studiesSection: {
                title: "Studies and Courses",
                item1: {
                    institution: "Instituto Tecnológico del Comahue",
                    course: `Electronic technician in automation and control of
                    processes | 2010 - 2016`,
                },
                item2: {
                    institution: "Universidad de Buenos Aires",
                    course: `Computer Science (In progress) | 2017 - 2020`,
                },
                item3: {
                    institution: "Universidad Tecnológica Nacional",
                    course: `Diploma in full stack web programming with React
                    JS | 08/2020 - 02/2021`,
                },
            },
        },
    },
};

export const LangContext = React.createContext(lang.es);
