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
        stackSection: {
            title: "Tecnologías que utilizo",
        },
        proyectsSection: {
            title: "Trabajos y proyectos",
            works: [
                {
                    title: "MehrCare",
                    description:
                        "Landing page de una nueva empresa de work & travel para enfermeros.",
                    github: "https://github.com/julian119988/MehrCare",
                    link: "https://mehr-care.vercel.app/",
                },
                {
                    title: "Agenmap",
                    description:
                        "Aplicación web para buscar alojamiento vacacional.",
                    github: "https://github.com/julian119988/agenmap-client",
                    link: "https://agenmap-client.vercel.app/",
                },
                {
                    title: "EcotiendaIPUUM",
                    description:
                        "Aplicación de gestión integral desarrollada con React, NodeJS (express), MongoDB y Electron.",
                    github: "https://github.com/julian119988/ecotienda-ipuum",
                },
                {
                    title: "Barra interactiva",
                    description: "Barra interactiva hecha con React y Sass.",
                    github: "https://github.com/julian119988/interactive-pricing-challenge",
                    link: "https://interactive-princing.netlify.app/",
                },
            ],
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
        stackSection: {
            title: "Tech stack",
        },
        proyectsSection: {
            title: "Works and projects",
            works: [
                {
                    title: "MehrCare",
                    description:
                        "Landing page of a new work & travel company made with Reactjs.",
                    github: "https://github.com/julian119988/MehrCare",
                    link: "https://mehr-care.vercel.app/",
                },
                {
                    title: "Agenmap",
                    description:
                        "Website created for people looking for vacation rental accommodation.",
                    github: "https://github.com/julian119988/agenmap-client",
                    link: "https://agenmap-client.vercel.app/",
                },
                {
                    title: "EcotiendaIPUUM",
                    description:
                        "Business management application for desktop made with React, NodeJS (express), MongoDB and Electron.",
                    github: "https://github.com/julian119988/ecotienda-ipuum",
                },
                {
                    title: "Interactive pricing bar",
                    description:
                        "Interactive pricing bar made with React and Sass.",
                    github: "https://github.com/julian119988/interactive-pricing-challenge",
                    link: "https://interactive-princing.netlify.app/",
                },
            ],
        },
    },
};

export const LangContext = React.createContext(lang.es);
